import React from 'react'
import EducationSection from '../components/Education.cv'
import SkillsSection from '../components/Skills.cv'
import ExperienceSection from '../components/Experience.cv'
import OtherSection from '../components/Other.cv'
import MacTerminal from '../components/MacTerminal'
import CommentsSection from '../components/CommentSection'
import RandomQuotes from '../components/RandomQuotes'
import UsefullLinks from '../components/CoolLinks'
import LinkedinButton from '../components/LinkedinButton'
import GithubButton from '../components/GithubButton'
import CvButton from '../components/CvButton'
import pfp from '../assets/pepe.jpg'
import SpotifyWidget from '../components/SportifyWidget'
import AnimBg from '../components/VantaBackground'

export default function HomePage() {
    return (
        <div className="max-w-[1000px] flex flex-col lg:flex-row gap-3">
            <div className='flex flex-col gap-4 min-h-[100px] w-full rounded-xl shadow-md'>
                <div className='rounded-xl relative flex flex-col bg-[white] shadow-xl'>
                    {/* <AnimBg className='rounded-t-xl z-10 overflow-hidden absolute w-full h-full'/> */}
                    <div className="flex flex-col md:flex-row gap-6 p-4 z-20">
                        <div className="flex gap-5 justify-between">
                            <img className="rounded-lg overflow-hidden min-w-[150px] min-h-[150px] max-w-[170px] md:max-w-[230px]" src={pfp} />
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
                                    I am a 22-year-old 4th year student at EPITECH Paris. I'm studying software development and learning new technologies like robotics, embedded development and tech design.
                                    I am deeply interested in traveling and exploring new destinations. Check out my github!
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
                    {/* <div className="w-full h-[10px] mb-[-0.3px] z-20 bg-gradient-to-b from-transparent to-white" /> */}
                </div>

                <div className='p-4 pt-0 bg-white rounded-xl relative'>
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
                {/* <SpotifyWidget /> */}
                <CommentsSection />
                <UsefullLinks />
            </div>
        </div >
    )
}
