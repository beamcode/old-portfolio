import React from 'react'
import EducationSection from '../components/Education.cv'
import SkillsSection from '../components/Skills.cv'
import ExperienceSection from '../components/Experience.cv'
import OtherSection from '../components/Other.cv'
import MacTerminal from '../components/Terminal'
import CommentsSection from '../components/Comments'
import RandomQuotes from '../components/RandomQuotes'
import UsefullLinks from '../components/Links'
import LinkedinButton from '../components/LinkedinButton'
import GithubButton from '../components/GithubButton'
import CvButton from '../components/CvButton'
import pfp from '../assets/pfp.jpg'
import SpotifyWidget from '../components/SportifyWidget'
import AnimBg from '../components/VantaBackground'

export default function HomePage() {

    function setMode() {
        if (document.documentElement.classList.contains('dark'))
            document.documentElement.classList.remove('dark')
        else
            document.documentElement.classList.add('dark')
    }

    return (
        <div className="max-w-[1000px] flex flex-col lg:flex-row gap-4">
            <div className='flex flex-col gap-4 min-h-[100px] w-full rounded-xl shadow-md'>
                <div className='rounded-xl relative flex flex-col bg-white dark:bg-[#181A1B] shadow-xl'>

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
                                <div className='w-full flex justify-between'>
                                    <h1 className="mb-3 text-5xl md:text-[40px] w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Samuel Palmer</h1>
                                    <button onClick={() => setMode()} aria-label="Toggle Dark Mode" type="button" className="h-fit w-fit p-2 bg-gray-200 rounded-lg dark:bg-[#444444] flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 dark:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 hidden dark:block text-gray-800 dark:text-gray-200">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-[#BBBCBA] mb-3">
                                    I am a 22-year-old 4th year student at EPITECH Paris. I'm studying software development and learning new technologies like robotics, embedded development and tech design.
                                    I am deeply interested in traveling and exploring new destinations. Check out my github!
                                </p>
                            </div>
                            <div className="hidden md:flex gap-2 h-[35px] justify-between w-full">
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

                <div className='p-4 pt-0 bg-white dark:bg-[#181A1B] rounded-xl relative'>
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

            {/* <div className='flex flex-col gap-4 lg:gap-5 lg:w-[400px]'>
                <RandomQuotes />
                <MacTerminal />
                <SpotifyWidget />
                <CommentsSection />
                <UsefullLinks />
            </div> */}
        </div >
    )
}
