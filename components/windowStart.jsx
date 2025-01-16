'use client'

import { useState } from "react"
import Image from "next/image"

export default function WindowStart() {
    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        setVisible(false)
    }

    if(!visible) {
        return null
    }
 
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 ">
            <div className="bg-[--background] w-[700px] h-[340px] rounded-xl p-8 flex flex-col z-40">
                <p className="text-3xl flex justify-center mb-7">Pay attention Recruit</p>
                <p className="text-xl mb-[50px] min-w-[572px]">This page is here to have a laugh and reward all those undercover secret agents who do a very important job for us. It is important to note that our intention is not to encourage or promote hatred towards any of these players, what we are looking for is to have a good time :)</p>
                <div className="bg-[orange] w-full p-1 flex justify-center items-center rounded-lg">
                    <button onClick={handleClick} className="text-2xl text-white w-full">Aceptar</button>
                </div>
            </div>
                <Image src='/images/Reinhardt.webp' alt='heroe' width={10000} height={1000} className=" absolute mt-96 ml-96 w-auto h-[1300px] hidden 2xl:block"/>
        </div>
    )
}