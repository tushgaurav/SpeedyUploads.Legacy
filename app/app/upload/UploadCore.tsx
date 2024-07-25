"use client"
import { useFilePicker } from 'use-file-picker';
import {
    FileAmountLimitValidator,
    FileTypeValidator,
    FileSizeValidator,
    ImageDimensionsValidator,
} from 'use-file-picker/validators';
import { useState } from 'react';
import { Button, AspectRatio } from '@chakra-ui/react';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadSuccess from './Success';
import { createUpload } from '@/server/db/db_operations';
import QRCode from '@/components/QRCode/QRCode';
import Share from '@/components/Share';

const ErrorMessages = {
    "FileReaderError": "Error reading file. Please try again.",
    "FileAmountLimitError": "You can only upload 1 file at a time.",
    "FileSizeError": "File size is too large. Please upload a file less than 50MB.",
    "ImageDimensionError": "Image dimensions are too large. Please upload an image less than 1600x900 pixels.",
    "FileTypeError": "File type not supported. Please upload a JPG or PNG file.",
}

export default function UploadCore({ userId }: { userId: string }) {
    const [uploading, setUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [fileUrl, setFileUrl] = useState('' as string | null);

    const { openFilePicker, filesContent, loading, errors } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        validators: [
            new FileAmountLimitValidator({ max: 1 }),
            new FileTypeValidator(['jpg', 'png']),
            new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ }),
            // new ImageDimensionsValidator({
            //     maxHeight: 900, // in pixels
            //     maxWidth: 1600,
            //     minHeight: 600,
            //     minWidth: 768,
            // }),
        ]
    });


    console.log(filesContent)


    const handleImageUpload = async (name: string, extension: string, base64Image: string) => {
        try {
            setUploading(true);
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ base64Image }),
            });

            const data = await response.json();
            setFileUrl(data.url);

            // DB Operations
            const syncData = { userId, dataUrl: data.url, name, extension }

            await fetch('/api/upload/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(syncData),
            });

            setUploading(false);
            setUploadComplete(true);
        } catch (error) {
            setUploading(false);
            console.error('Error uploading image:', error);
        }
    };

    const uploadImages = () => {
        filesContent.forEach(file => {
            const name = file.name;
            const extension = name.split('.').pop() as string;
            const base64Image = file.content.split(',')[1];
            handleImageUpload(name, extension, base64Image);
        });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {/* If upload complete display something different */}
            {uploadComplete ? (
                <div className='flex  gap-6  justify-center items-center'>
                    <UploadSuccess fileLink={fileUrl as string} />
                    <div className="flex flex-col gap-4 items-center">
                        <QRCode data={fileUrl} />
                        <Share link={fileUrl as string} />
                    </div>
                </div>
            ) : (

                <div className="">
                    <h1 className='text-xl font-bold'>Upload Files</h1>
                    <p className=' pb-4'>Select a file or drag and drop it here. Max File Size: 50MB</p>

                    <div className="max-w-xl mb-4">
                        <label
                            className="flex justify-center w-full h-32 my-2 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                        >
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span className="font-medium text-gray-600" onClick={() => openFilePicker()}>
                                    Drop files to Attach, or <button className="text-blue-600 underline">browse</button>
                                </span>
                            </span>
                            <input type="file" name="file_upload" className="hidden" />
                        </label>

                        {errors.map((error, index) => (
                            <p key={index} className='text-red-400 py-2 text-sm font-bold text-center'>{
                                ErrorMessages[error.name as keyof typeof ErrorMessages]
                            }</p>
                        ))}

                        {
                            filesContent.length > 0 && (
                                <div className='max-w-xl mt-4 flex flex-col gap-2 items-center justify-center'>
                                    {
                                        filesContent.map((file, index) => (
                                            <div key={index}>
                                                <h2 className='font-light text-sm '>{file.name}</h2>


                                                <AspectRatio maxW='260px' ratio={1}>
                                                    <img alt={file.name} src={file.content} className='w-full'></img>
                                                </AspectRatio>
                                            </div>
                                        ))
                                    }
                                    <Button
                                        colorScheme='blue'
                                        leftIcon={<FaCloudUploadAlt />}
                                        isLoading={uploading}
                                        loadingText="Uploading"
                                        onClick={uploadImages}
                                        disabled={uploading}
                                        className='mt-2'
                                    >
                                        Upload
                                    </Button>
                                </div>
                            )
                        }

                    </div >


                </div>
            )}




        </div>
    );
}
