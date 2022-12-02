import React, { useState, useEffect, useRef } from 'react'
import ANIMATION from 'vanta/dist/vanta.net.min'
import EducationSection from '../components/education.cv'
import SkillsSection from '../components/skills.cv'
import ExperienceSection from '../components/experience.cv'
import OtherSection from '../components/other.cv'
import MacTerminal from '../components/MacTerminal'
import CommentsSection from '../components/CommentSection'
import RandomQuotes from '../components/RandomQuotes'
import UsefullLinks from '../components/UsefulLinks'
import LinkedinButton from '../components/LinkedinButton'
import GithubButton from '../components/GithubButton'
import CvButton from '../components/CvButton'

function AnimBg({ children }) {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(ANIMATION({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: '#50649c',
                backgroundColor: '#1a253f',
                spacing: 19.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='' ref={myRef}>
            {children}
        </div>
    )
}

export default function HomePage() {
    return (
        <div className="max-w-[1000px] flex gap-3 flex-col lg:flex-row">
            <div className='gap-2 min-h-[100px] w-full overflow-hidden rounded-xl shadow-md'>
                <AnimBg>
                    <div className='p-4'>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-3 justify-between">
                                <img className="rounded-lg overflow-hidden min-w-[230px] min-h-[230px] max-w-[230px] max-h-[230px]" src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" />
                                <CvButton mobile />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h1 className="hover:animate-spin mb-3 text-4xl md:text-5xl w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Samuel Palmer</h1>
                                    <p className="text-[#BBBCBA] mb-3">
                                        I am a 22-year-old 4th year student at EPITECH Paris. I'm passionate about development, learning new technologies like robotics, embedded development and tech design.
                                        I am pationate about travel and exploration. Check out my github!
                                    </p>
                                </div>
                                <div className="flex gap-2 justify-end md:justify-between w-full">
                                    <div className='hidden md:flex'>
                                        <CvButton />
                                    </div>
                                    <div className='flex gap-2'>
                                        <GithubButton />
                                        <LinkedinButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-[10px] bg-gradient-to-b from-transparent to-white" />
                </AnimBg>

                <div className='p-4 pt-0 bg-white'>
                    <div className="flex">
                        <SkillsSection />
                        <ExperienceSection />
                    </div>

                    {/* <div className="flex">
                        <EducationSection />
                        <OtherSection />
                    </div> */}
                </div>

            </div>

            {/* <div className='flex flex-col gap-2 lg:w-[400px]'>
                <MacTerminal />
                <CommentsSection />

                <UsefullLinks />
                <RandomQuotes />
            </div> */}
        </div >
    )
}