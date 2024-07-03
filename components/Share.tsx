import {
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    TelegramShareButton,
} from "react-share";

import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

function ShareIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-primaryblue text-white rounded-full p-2
        hover:bg-blue-900 cursor-pointer transition-colors duration-300 ease-in-out  
        ">
            {children}
        </div>

    )
}

export default function Share({ link }: { link: string }) {
    return (
        <div className="space-x-2">
            <TwitterShareButton url={link}>
                <ShareIcon>
                    <BsTwitterX />
                </ShareIcon>
            </TwitterShareButton>

            <EmailShareButton url={link}>
                <ShareIcon>
                    <MdEmail />
                </ShareIcon>

            </EmailShareButton>

            <WhatsappShareButton url={link}>
                <ShareIcon>
                    <BsWhatsapp />
                </ShareIcon>
            </WhatsappShareButton>

            <TelegramShareButton url={link}>
                <ShareIcon>
                    <BiLogoTelegram />
                </ShareIcon>
            </TelegramShareButton>
        </div>
    )
}