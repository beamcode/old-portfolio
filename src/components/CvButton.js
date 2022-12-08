import React from 'react'

export default function CvButton({ mobile }) {
    return (
        <button type="button" onClick={() => alert("Please send me an email for a copy of my CV with contact details! ThankYou")} className={` ${mobile && 'min-w-[230px] md:hidden h-full'} py-1 px-3 pr-4 gap-2 flex items-center justify-between transition duration-100 hover:scale-[0.98] border border-[#9c1208] bg-[#C55300] shadow-md rounded-lg`}>
            {!mobile &&
                <svg xmlns="http://www.w3.org/2000/svg" width={35} fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
            }
            <span className='text-white text-center text-md font-semibold whitespace-nowrap w-full'>CV</span>
        </button>
    )
}
