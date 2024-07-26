import Link from "next/link";

export default function SimpleCard(props: { title: string, body: string, link: string, linkText?: any, children?: any, [x: string]: any }) {
    return (
        <div className="relative w-full flex flex-col  text-gray-700 bg-blue-50  bg-clip-border rounded min-w-56 h-full ">
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {props.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit pt-auto">
                    {props.body}
                    {props.children}
                </p>
            </div>
            <div className="p-6 mt-auto">
                <Link href={props.link} target="_blank">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        {props.linkText || "Learn More"}
                    </button>
                </Link>
            </div>
        </div>
    )
} 