import React, { useState, useEffect, useRef } from 'react'
import ANIMATION from 'vanta/dist/vanta.net.min'
import * as THREE from "three";

export default function AnimBg({ children, className }) {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(ANIMATION({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: '#50649c',
                backgroundColor: '#1a253f',
                spacing: 23.00,
                points: 11.00,
                maxDistance: 30.00,
                showDots: true,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className={className} ref={myRef}>
            {children}
        </div>
    )
}
