'use client'

import ImageStats from "./imageStats"
import {useState} from 'react'
import Window from "./window"

export default function Stats() {
    const [showWindow, setShowWindow] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)

    const handleClick = (src, rel) => {
        setCurrentImage({src, rel});
        setShowWindow(true)
    }

    return (
        <div className="relative">
            <div className="grid xl:grid-cols-2 justify-center gap-10 place-items-center mx-auto max-w-screen-lg">
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the brutalito' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
                <ImageStats src='/stats/Oraclure.png' rel='stats the Oraclure' onClick={handleClick}/>
            </div>

            {showWindow && (
                <Window src={currentImage.src} rel={currentImage.rel} onClose={() => setShowWindow(false)} />
            )}
        </div>
    )
}