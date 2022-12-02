import React from 'react'

export default function ExperienceSection() {
    return (
        <div className="w-full pt-4 px-5">
            <div className="flex items-center mb-3 gap-2 -ml-[11.5px]">
                <svg aria-hidden="true" width={25} className="h-10" fill="#50649c" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <h1 className="text-2xl font-semibold text-[#50649c]">Experience</h1>
            </div>

            <ol className="relative border-l border-gray-200">

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 rounded-full" />
                    <div className="flex items-center mb-1 gap-1">

                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                            Weel
                        </h3>
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-600">Apr - Aug 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                            Denarius
                            {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                2020
                            </span> */}
                        </h3>
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-600">Sept - Dec 2020</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Internship in cloud data management, use of Google cloud platform, development of tools in C# and development of dynamic SQL queries.</p>
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 whitespace-nowrap">
                            Titan Fleet Training
                        </h3>
                    </div>

                    <time className="block mb-2 text-sm font-normal leading-none text-gray-600">April 2017</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Internship abroad motoryacht NAHNAHNAH as an asistant engineer. Learning of basic engineering and fundamentals of computer networks abroad a vessel.</p>
                </li>
            </ol>
        </div>
    )
}