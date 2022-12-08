import React, { useState, useEffect, useRef } from 'react'
import ANIMATION from 'vanta/dist/vanta.net.min'
import EducationSection from '../components/education.cv'
import SkillsSection from '../components/skills.cv'
import ExperienceSection from '../components/experience.cv'
import OtherSection from '../components/other.cv'
import MacTerminal from '../components/MacTerminal'
import CommentsSection from '../components/CommentSection'
import RandomQuotes from '../components/RandomQuotes'
import UsefullLinks from '../components/CoolLinks'
import LinkedinButton from '../components/LinkedinButton'
import GithubButton from '../components/GithubButton'
import CvButton from '../components/CvButton'
import * as THREE from "three";
import pfp from '../assets/pepe.jpg'

function AnimBg({ children }) {
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
        <div className='rounded-t-xl overflow-hidden absolute w-full h-full' ref={myRef}>
            {children}
        </div>
    )
}

export default function HomePage() {
    return (
        <div className="max-w-[1000px] flex flex-col lg:flex-row gap-3">
            <div className='gap-2 min-h-[100px] w-full rounded-xl shadow-md bg-[#1a253f]'>

                <div className='rounded-t-xl relative flex flex-col bg-[#1a253f]'>
                    <AnimBg />
                    <div className="flex flex-col md:flex-row gap-6 p-4 z-20">
                        <div className="flex gap-5 justify-between">
                            <img className="rounded-lg overflow-hidden min-w-[230px] min-h-[230px] max-w-[230px] max-h-[230px]" src={pfp} />
                            <div className="flex flex-col gap-5 grow justify-between md:hidden">
                                <CvButton />
                                <GithubButton />
                                <LinkedinButton />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className="hover:animate-spin mb-3 text-5xl md:text-[40px] w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Samuel Palmer</h1>
                                <p className="text-[#BBBCBA] mb-3">
                                    I am a 22-year-old 4th year student at EPITECH Paris. I'm studying about software development and learning new technologies like robotics, embedded development and tech design.
                                    I am pationate about travel and exploration. Check out my github!
                                </p>
                            </div>
                            <div className="hidden md:flex gap-2 h-[45px] justify-between w-full">
                                <CvButton />
                                <div className='flex gap-4 md:gap-2'>
                                    <GithubButton />
                                    <LinkedinButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[10px] mb-[-0.3px] z-20 bg-gradient-to-b from-transparent to-white" />
                </div>

                <div className='p-4 pt-0 bg-white rounded-b-xl relative'>
                    <div className="md:flex">
                        <SkillsSection />
                        <ExperienceSection />
                    </div>

                    <div className="md:flex">
                        <EducationSection />
                        <OtherSection />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-2 lg:w-[400px]'>
                <MacTerminal />
                <RandomQuotes />

                <CommentsSection />
                <UsefullLinks />
            </div>
        </div >
    )
}
