"use client"
import { useFilePicker } from 'use-file-picker';
import {
    FileAmountLimitValidator,
    FileTypeValidator,
    FileSizeValidator,
    ImageDimensionsValidator,
} from 'use-file-picker/validators';


export default function UploadCore() {
    const { openFilePicker, filesContent, loading, errors } = useFilePicker({

        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        validators: [
            new FileAmountLimitValidator({ max: 1 }),
            new FileTypeValidator(['jpg', 'png']),
            new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ }),
            new ImageDimensionsValidator({
                maxHeight: 900, // in pixels
                maxWidth: 1600,
                minHeight: 600,
                minWidth: 768,
            }),
        ]
    });

    if (loading) return <p>Loading...</p>;
    // console.log(filesContent)

    return (
        <div>
            <h1>Upload Core</h1>
            <div>
                <button onClick={() => openFilePicker()}>Select files</button>
                <br />
                {filesContent.map((file, index) => (
                    <div key={index}>
                        <h2>{file.name}</h2>
                        {/* <div key={index}>{file.content}</div> */}
                        <img alt={file.name} src={file.content}></img>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}