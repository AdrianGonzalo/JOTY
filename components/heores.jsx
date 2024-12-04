import Image from "next/image"

export default function Heroes() { 
    return (
        <div className="absolute flex justify-between z-50">
            <Image src='/public/images/Tracer.webp' rel="heroe" width={300} height={700} className="border-black border-2 border-solid"/>
            <Image src='/public/images/Tracer.webp' rel="heroe" width={300} height={700} className="border-black border-2 border-solid"/>
        </div>
    )
}