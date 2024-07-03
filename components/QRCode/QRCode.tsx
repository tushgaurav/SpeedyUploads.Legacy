import { useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import { option } from "./options";



export default function QRCode({ data }: { data: any }) {
    const qrCode = new QRCodeStyling(option as any);
    qrCode.update({ data });

    const ref = useRef(null);

    useEffect(() => {
        qrCode.append(ref.current as unknown as HTMLElement);
    });




    return (
        <div ref={ref}></div>
    )
}