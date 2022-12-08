import React from 'react'

export default function EducationSection() {
    return (
        <div className="w-full pt-4 px-5">
            <div className="flex items-center mb-3 gap-2 -ml-[13px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="" width={30} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="#50649c" d="m21.49 10.19l-1-.55l-9-5h-.11a1.06 1.06 0 0 0-.19-.06h-.37a1.17 1.17 0 0 0-.2.06h-.11l-9 5a1 1 0 0 0 0 1.74L4 12.76v4.74a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.74l2-1.12v2.86a1 1 0 0 0 2 0v-3.44a1 1 0 0 0-.51-.87ZM16 17.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.63l4.51 2.5l.15.06h.09a1 1 0 0 0 .25 0a1 1 0 0 0 .25 0h.09a.47.47 0 0 0 .15-.06l4.51-2.5Zm-5-3.14L4.06 10.5L11 6.64l6.94 3.86Z" />
                </svg>
                <h1 className="text-2xl font-semibold text-[#50649c]">Education</h1>
            </div>

            <ol className="relative border-l border-gray-200">

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 rounded-full" />
                    <div className="flex items-center mb-1 gap-1">

                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                            Epitech (Nancy)
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            Latest
                        </span>
                    </div>
                    <time className="block mb-2 text-md font-medium leading-none text-gray-600">2019 - 2024</time>
                    <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul>
                            <li>• Information Technology Expert Title</li>
                            <li>• Master's Degree, learning by practice through projects</li>
                        </ul>
                    </div>
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                            Leonardo Da Vinci High School of Architecture
                        </h3>
                    </div>
                    <time className="block mb-2 text-md font-medium leading-none text-gray-600">2016 - 2019</time>
                    <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul>
                            <li>• Graduated in STI2D (SCIENCE AND TECHNOLOGY OF INDUSTRY AND SUSTAINABLE DEVELOPMENT)</li>
                            <li>• Studies focused on general architecture</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    )
}
