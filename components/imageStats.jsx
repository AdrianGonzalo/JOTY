import Image from "next/image"

export default function ImageStats({src, rel, onClick}) {
    return (
        <div className="cursor-pointer" onClick={() => onClick(src, rel)}>
            <Image 
            src={src} 
            alt={rel} 
            width={500} 
            height={60}
            className=" border-2 border-solid mx-10 shadow-xl w-[500px] h-[60px]"
        />
        </div>
        
    )
}