import Image from "next/image"

export default function Heroes() { 
    return (
        <div className="relative w-full h-auto ">
            <div className="fixed left-0 hidden 2xl:block transform scale-x-[-1]">
                <Image src='/images/Tracer.webp' alt="heroe" width={400} height={1000}/>
            </div>
            <div className="fixed right-0 hidden 2xl:block">
                <Image src='/images/lucio.png' alt="heroe" width={400} height={1000}/>
            </div>
        </div>
    )
}

