"use client"
import { useFilePicker } from 'use-file-picker';
import {
    FileAmountLimitValidator,
    FileTypeValidator,
    FileSizeValidator,
    ImageDimensionsValidator,
} from 'use-file-picker/validators';
import { useState } from 'react';

export default function UploadCore() {
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

    const [uploading, setUploading] = useState(false);

    const handleImageUpload = async (base64Image: string) => {
        try {
            setUploading(true);
            await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ base64Image }),
            });
            setUploading(false);
        } catch (error) {
            setUploading(false);
            console.error('Error uploading image:', error);
        }
    };

    const uploadImages = () => {
        filesContent.forEach(file => {
            const base64Image = file.content.split(',')[1];
            handleImageUpload(base64Image);
        });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Upload Core</h1>
            <div>
                <button onClick={() => openFilePicker()}>Select files</button>
                <br />
                {filesContent.map((file, index) => (
                    <div key={index}>
                        <h2>{file.name}</h2>
                        <img alt={file.name} src={file.content}></img>
                        <br />
                    </div>
                ))}
                {filesContent.length > 0 && (
                    <button onClick={uploadImages} disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Upload Images to Server'}
                    </button>
                )}
            </div>
        </div>
    );
}
