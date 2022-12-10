import React from 'react'

export default function OtherSection() {
    return (
        <div className="w-full pt-4 px-5">
            <div className="flex items-center mb-3 gap-2 -ml-[11.5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width={27} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path className='fill-[#50649c] dark:fill-[#809cbe]' d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z" />
                </svg>
                <h1 className="text-2xl font-semibold text-[#50649c] dark:text-[#809cbe]">Passions and Interests</h1>
            </div>

            <ol className="relative border-l border-gray-200 dark:border-[#363b3d]">

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 dark:bg-[#2a2e30] dark:bg-[#2a2e30] rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <svg width={20} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
                            <path fill="#FF9800" d="M44,18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34 v-4h10v-4H34v-4H44z" />
                            <path fill="#4CAF50" d="M8,12v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12c0-2.2-1.8-4-4-4H12C9.8,8,8,9.8,8,12z" />
                            <path fill="#37474F" d="M31,31H17c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C33,30.1,32.1,31,31,31z" />
                        </svg>

                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
                            Robotics / Electronics (embedded systems)
                        </h3>
                    </div>

                    {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Released on January 13th, 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 dark:bg-[#2a2e30] rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width={20}>
                            <path className='dark:fill-white' d="M255.93 19.2c-13.39 13.39-18.97 35.15-18.97 71.69.28 22.04 1.67 33.47 5.86 46.02 3.35 9.2 41.56 93.17 85.36 186.61l79.5 170.15 8.09-18.13c4.46-9.76 22.31-47.98 39.61-84.8 17.29-36.82 31.24-68.9 31.24-71.13-.56-8.37-110.18-238.77-119.67-251.88C345.75 39 300.84 9.99 277.41 9.99c-10.32.01-13.95 1.68-21.48 9.21zM693.58 18.37c-22.32 11.16-46.02 30.4-59.42 47.98-7.25 9.76-78.38 159.27-208.09 437.37-108.23 232.35-197.21 423.71-197.49 425.1-.84 3.35 129.71 63.88 131.94 61.09.84-1.11 13.11-26.78 27.06-56.62 13.96-29.85 102.66-220.09 196.94-422.6 94.28-202.51 173.22-373.77 174.89-380.75 5.3-18.69 4.46-65.27-1.12-84.24-2.51-8.93-8.37-20.64-13.11-25.94-7.53-8.65-10.32-9.76-21.76-9.76-9.2 0-18.4 2.51-29.84 8.37zM521.2 477.5c15.34 7.25 27.89 13.39 28.45 13.95 1.39 1.12-7.81 17.85-9.76 17.85-1.67 0-56.9-25.1-59.13-26.78-2.23-1.95 6.14-17.85 9.48-17.85 1.95 0 15.9 5.86 30.96 12.83zm-45.19 93.16c16.18 7.53 29.57 14.51 29.57 15.06 0 1.39-5.86 15.62-7.25 17.85-.56.84-59.69-26.5-61.92-28.45-1.12-1.12 7.25-18.41 8.93-18.41.55.01 14.21 6.14 30.67 13.95zM71 112.09c-12.55 8.65-14.5 17.57-14.5 62.48s2.79 58.3 13.67 64.16l5.86 3.07v624.54l-7.53-1.67c-4.46-.84-11.43-2.79-15.9-4.19-11.72-3.63-11.72-3.63-17.02 9.21-4.18 10.88-4.18 11.99 0 15.06 2.51 1.95 12.55 5.02 22.59 6.97l17.85 3.63v26.78h27.9v-27.34l18.13-3.35c9.76-1.95 19.8-4.74 22.32-6.7 4.18-3.07 4.18-4.18 0-15.06-5.3-12.83-5.3-12.83-17.02-9.21-4.46 1.4-11.44 3.35-15.62 4.19l-7.81 1.67V554.2c0-302.37.28-312.69 5.3-315.2 11.16-6.14 14.23-19.53 14.23-62.76 0-44.91-2.51-55.79-14.78-63.88-9.22-5.85-29.31-6.13-37.67-.27zM890.79 112.09c-11.71 8.37-14.22 20.08-14.22 63.88 0 43.51 2.79 56.9 13.67 62.76l5.86 3.07v624.54l-7.53-1.67c-4.46-.84-11.44-2.79-15.9-4.19-11.71-3.63-11.71-3.63-17.01 9.21-4.18 10.88-4.18 11.99 0 15.06 2.51 1.95 12.55 5.02 22.59 6.97l17.85 3.63v26.78H924v-26.78l17.85-3.63c10.04-1.95 20.08-5.02 22.59-6.97 4.18-3.07 4.18-4.18 0-15.06-5.3-12.83-5.3-12.83-17.01-9.21-4.46 1.4-11.44 3.35-15.62 4.19l-7.81 1.67V241.8l5.86-3.07c10.88-5.86 13.67-19.25 13.67-62.76 0-56.07-5.86-68.34-33.47-68.34-7.27 0-15.64 1.95-19.27 4.46zM591.49 546.96c-4.46 7.53-78.38 167.64-78.38 170.15 0 3.07 123.29 269.18 126.36 272.8 2.23 2.51 132.77-57.74 131.94-61.09-.28-1.39-37.66-82.29-83.12-179.63-45.47-97.36-85.64-183.27-88.99-191.08-3.34-7.53-6.97-12.55-7.81-11.15z" />
                        </svg>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
                            Competitive skiing (2 years)
                        </h3>
                    </div>

                    {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Released on January 13th, 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 dark:bg-[#2a2e30] rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394.562 394.562" width={20}>
                            <path fill="#ffebd4" d="M299.383 34.883C245.23 52.576 195.849 83.47 152.615 126.705 87.269 192.051 21.012 289.238 20.009 342.229l9.09 9.09L358.88 21.539c-14.883 1.759-35.461 5.491-59.497 13.344zM43.241 365.462l9.085 9.085c24.053-.501 59.742-14.866 100.747-40.579 38.784-24.32 80.62-57.861 114.781-92.023C347.97 161.831 368.014 76.889 372.96 35.742L43.241 365.462z" />
                            <path fill="#ffac52" d="M393.689 6.062zM393.259 5.19zM394.033 6.975zM394.285 7.913zM392.751 4.371a9.941 9.941 0 0 0-1.16-1.403 9.96 9.96 0 0 0-2.937-2.024 10.063 10.063 0 0 1 4.097 3.427zM394.444 8.865zM22.027 372.533h.001l-.002-.001zM392.753 4.373zM386.117.178zM386.999.362zM385.216.073zM387.846.619zM374.329 20.209c-4.053.204-9.263.597-15.45 1.329L29.098 351.319l14.142 14.143 329.72-329.72c.75-6.237 1.157-11.478 1.369-15.533z" />
                            <path d="M394.512 9.611c-.004-.089-.018-.176-.024-.264a9.478 9.478 0 0 0-.203-1.433 10.766 10.766 0 0 0-.252-.938c-.039-.12-.081-.237-.124-.355a9.971 9.971 0 0 0-.22-.559c-.038-.087-.08-.173-.12-.259a9.733 9.733 0 0 0-.309-.612c-.028-.05-.059-.099-.088-.149a10.227 10.227 0 0 0-.418-.668l-.001-.002a10.076 10.076 0 0 0-4.097-3.427l-.095-.044a10.27 10.27 0 0 0-.714-.281l-.195-.069a10.164 10.164 0 0 0-1.533-.373 8.836 8.836 0 0 0-.902-.105c-.09-.006-.177-.021-.267-.025 0 0-1.041-.047-3.027-.047-21.856 0-136.314 5.427-243.45 112.562-35.881 35.882-70.931 79.782-96.163 120.446C22.197 265.422-1.457 311.485.07 346.855c.108 2.5 1.15 4.869 2.919 6.64l19.037 19.037.002.002 19.037 19.037a9.996 9.996 0 0 0 6.64 2.919c1.085.047 2.204.071 3.324.071h.003c60.723 0 162.154-69.663 230.965-138.473 60.875-60.876 88.217-124.359 100.434-166.895 13.329-46.41 12.137-78.25 12.081-79.582zM153.073 333.968c-41.005 25.713-76.694 40.078-100.747 40.579l-9.085-9.085-14.142-14.143-9.09-9.09c1.003-52.991 67.26-150.178 132.606-215.523 43.235-43.235 92.615-74.129 146.768-91.822 24.036-7.853 44.614-11.585 59.496-13.345 6.187-.732 11.396-1.125 15.45-1.329-.212 4.055-.619 9.296-1.369 15.533-4.947 41.147-24.99 126.089-105.106 206.204-34.161 34.16-75.997 67.701-114.781 92.021z" />
                        </svg>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
                            Amateur Surfing
                        </h3>
                    </div>
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 dark:bg-[#2a2e30] rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <svg enableBackground="new 0 0 405.367 405.367" viewBox="0 0 405.37 405.37" xmlns="http://www.w3.org/2000/svg" width={22}>
                            <path d="m238.26 187.95c3.93 9.5 3.93 19.97 0 29.47-3.94 9.5-11.34 16.9-20.84 20.84-19.61 8.12-42.18-1.23-50.31-20.84-8.12-19.62 1.23-42.18 20.84-50.31 4.8-1.99 9.78-2.93 14.68-2.93 15.12 0 29.49 8.96 35.63 23.77zm-25.04 40.17c14.03-5.81 20.72-21.95 14.91-35.97v-0.01c-5.82-14.02-21.95-20.71-35.98-14.9-6.8 2.82-12.09 8.11-14.91 14.91-2.81 6.79-2.81 14.28 0 21.07 2.82 6.8 8.11 12.09 14.91 14.9a27.39 27.39 0 0 0 10.53 2.12c3.57 0 7.14-0.71 10.54-2.12z" fill="#e0974f" />
                            <path d="m389.77 125.19c0.95 2.29-0.14 4.93-2.43 5.88l-26.64 11.03c-0.54-1.4-1.09-2.79-1.67-4.18-0.57-1.39-1.17-2.77-1.78-4.13l26.64-11.04c2.3-0.95 4.93 0.15 5.88 2.44zm-2.43 149.11c2.29 0.94 3.38 3.58 2.43 5.87a4.499 4.499 0 0 1-5.88 2.44l-26.63-11.03c0.6-1.37 1.2-2.75 1.77-4.13 0.58-1.39 1.13-2.79 1.67-4.19l26.64 11.04zm-104.72 109.59c0.95 2.29-0.15 4.93-2.44 5.88-2.29 0.94-4.93-0.15-5.88-2.44l-11.03-26.63c1.39-0.54 2.79-1.09 4.18-1.67 1.39-0.57 2.76-1.17 4.13-1.78l11.04 26.64zm-140.51-23.19-11.04 26.63a4.507 4.507 0 0 1-5.88 2.44 4.506 4.506 0 0 1-2.43-5.88l11.03-26.64a165.98 165.98 0 0 0 8.32 3.45zm-94-89.12-26.63 11.03c-2.29 0.95-4.93-0.14-5.88-2.44a4.46 4.46 0 0 1 0-3.44 4.472 4.472 0 0 1 2.44-2.43l26.63-11.04c0.54 1.4 1.09 2.79 1.67 4.19 0.57 1.38 1.17 2.76 1.77 4.13zm-26.63-148.83 26.71 11.07a166.94 166.94 0 0 0-3.44 8.31l-26.71-11.06c-1.11-0.46-1.98-1.33-2.44-2.44s-0.46-2.33 0-3.44c0.95-2.29 3.59-3.39 5.88-2.44zm109.59-104.72 11.04 26.64c-1.4 0.53-2.8 1.09-4.19 1.66-1.39 0.58-2.76 1.17-4.13 1.78l-11.03-26.64c-0.46-1.11-0.46-2.33 0-3.44s1.32-1.97 2.43-2.43c2.3-0.95 4.93 0.14 5.88 2.43zm151.55 0a4.46 4.46 0 0 1 0 3.44l-11.04 26.64c-1.37-0.61-2.74-1.2-4.13-1.78-1.39-0.57-2.79-1.12-4.18-1.66l11.03-26.64a4.472 4.472 0 0 1 2.44-2.43 4.46 4.46 0 0 1 3.44 0c1.11 0.46 1.98 1.32 2.44 2.43zm-30.15 76.23-25.24 60.92a54.27 54.27 0 0 0-8.31-3.44l25.23-60.92c2.82 1.04 5.59 2.19 8.32 3.44zm62.14 66.93-60.96 25.25a51.035 51.035 0 0 0-3.45-8.31l60.97-25.25c0.62 1.35 1.23 2.73 1.8 4.12 0.58 1.39 1.12 2.79 1.64 4.19zm-60.96 57.73 60.91 25.23c-1.05 2.81-2.2 5.59-3.45 8.31l-60.9-25.22a51.244 51.244 0 0 0 3.44-8.32zm-26.41 31.29 25.25 60.95c-1.36 0.62-2.73 1.23-4.12 1.81s-2.79 1.12-4.19 1.64l-25.25-60.96a56.5 56.5 0 0 0 4.23-1.54c1.4-0.58 2.75-1.22 4.08-1.9zm-40.79 3.44-25.25 60.96a107.3 107.3 0 0 1-8.32-3.45l25.25-60.95a51.244 51.244 0 0 0 8.32 3.44zm-31.29-26.41-60.96 25.25a113.85 113.85 0 0 1-3.44-8.32l60.96-25.25c0.45 1.42 0.95 2.84 1.53 4.24 0.58 1.39 1.23 2.75 1.91 4.08zm-60.95-74.36 60.97 25.25a54.381 54.381 0 0 0-3.44 8.32l-60.98-25.26c0.52-1.4 1.06-2.8 1.64-4.19 0.57-1.39 1.18-2.76 1.81-4.12zm66.99-62.12 25.25 60.96c-1.42 0.45-2.84 0.95-4.24 1.53s-2.75 1.23-4.08 1.91l-25.25-60.96c1.36-0.62 2.73-1.23 4.12-1.8 1.4-0.58 2.8-1.12 4.2-1.64z" fill="#ad723d" />
                            <path d="m345.18 143.66c15.76 38.06 15.76 79.98-0.01 118.04-15.76 38.07-45.4 67.71-83.46 83.47-38.06 15.77-79.99 15.77-118.05 0-38.06-15.76-67.7-45.4-83.47-83.47-32.54-78.56 4.9-168.96 83.47-201.51 19.03-7.88 39.03-11.82 59.02-11.82 20 0 40 3.94 59.03 11.82 38.06 15.77 67.7 45.41 83.47 83.47zm-91.07 183.17c68.45-28.36 101.07-107.12 72.72-175.57s-107.11-101.08-175.57-72.72c-33.16 13.73-58.99 39.56-72.72 72.72-13.74 33.16-13.74 69.69 0 102.85 13.73 33.16 39.56 58.98 72.72 72.72 16.58 6.87 34 10.3 51.43 10.3 17.41 0 34.84-3.43 51.42-10.3z" fill="#e0974f" />
                            <path d="M403.632 119.448c4.12 9.93-.62 21.36-10.55 25.48l-27.62 11.43c8.71 30.38 8.71 62.26.01 92.64l27.61 11.44c9.93 4.11 14.67 15.54 10.55 25.47-3.11 7.51-10.39 12.04-18.04 12.04-2.48 0-5-.47-7.44-1.48l-27.61-11.44c-15.32 27.64-37.87 50.19-65.5 65.51l11.43 27.61c2 4.81 2 10.11 0 14.92a19.354 19.354 0 0 1-10.55 10.55c-2.41 1-4.93 1.5-7.46 1.5s-5.06-.5-7.46-1.5c-4.82-1.99-8.56-5.74-10.56-10.55l-11.43-27.61c-15.19 4.36-30.76 6.55-46.33 6.55-15.56 0-31.13-2.19-46.31-6.55l-11.44 27.61c-3.11 7.5-10.38 12.04-18.04 12.04-2.48 0-5-.48-7.44-1.49-9.93-4.11-14.67-15.54-10.55-25.47l11.44-27.61c-27.64-15.32-50.19-37.87-65.51-65.51l-27.61 11.44a19.322 19.322 0 0 1-7.44 1.48c-7.65 0-14.93-4.53-18.04-12.04-4.11-9.93.62-21.36 10.56-25.47l27.62-11.44c-8.86-31.05-8.37-63.05.07-92.6l-27.69-11.47c-4.82-2-8.56-5.75-10.56-10.56a19.39 19.39 0 0 1 0-14.92c2-4.81 5.74-8.56 10.56-10.56a19.39 19.39 0 0 1 14.92 0l27.69 11.47c14.93-26.86 37.21-49.83 65.43-65.52l-11.44-27.62c-4.12-9.94.62-21.37 10.55-25.48 9.94-4.12 21.37.62 25.48 10.55l11.44 27.61c30.37-8.71 62.26-8.7 92.63 0l11.44-27.61c4.12-9.93 15.54-14.67 25.48-10.55 4.81 1.99 8.56 5.74 10.55 10.55 2 4.81 2 10.11 0 14.93l-11.43 27.61c27.63 15.32 50.18 37.87 65.5 65.5l27.61-11.44c4.82-1.99 10.12-1.99 14.93 0 4.81 2 8.56 5.75 10.55 10.56zm-16.29 11.62a4.506 4.506 0 0 0 2.43-5.88 4.507 4.507 0 0 0-5.88-2.44l-26.64 11.04c.61 1.36 1.21 2.74 1.78 4.13.58 1.39 1.13 2.78 1.67 4.18l26.64-11.03zm2.43 149.1c.95-2.29-.14-4.93-2.43-5.87l-26.64-11.04c-.54 1.4-1.09 2.8-1.67 4.19-.57 1.38-1.17 2.76-1.77 4.13l26.63 11.03c2.3.95 4.93-.14 5.88-2.44zm-44.6-18.47c15.77-38.06 15.77-79.98.01-118.04-15.77-38.06-45.41-67.7-83.47-83.47-19.03-7.88-39.03-11.82-59.03-11.82-19.99 0-39.99 3.94-59.02 11.82-78.57 32.55-116.01 122.95-83.47 201.51 15.77 38.07 45.41 67.71 83.47 83.47 38.06 15.77 79.99 15.77 118.05 0 38.06-15.76 67.7-45.4 83.46-83.47zm-62.55-240.23c.46-1.11.46-2.33 0-3.44s-1.33-1.97-2.44-2.43a4.46 4.46 0 0 0-3.44 0 4.472 4.472 0 0 0-2.44 2.43l-11.03 26.64c1.39.54 2.79 1.09 4.18 1.66 1.39.58 2.76 1.17 4.13 1.78l11.04-26.64zm-2.44 368.3c2.29-.95 3.39-3.59 2.44-5.88l-11.04-26.64c-1.37.61-2.74 1.21-4.13 1.78-1.39.58-2.79 1.13-4.18 1.67l11.03 26.63a4.519 4.519 0 0 0 5.88 2.44zm-138.07-345.1-11.04-26.64a4.502 4.502 0 0 0-5.88-2.43c-1.11.46-1.97 1.32-2.43 2.43s-.46 2.33 0 3.44l11.03 26.64c1.37-.61 2.74-1.2 4.13-1.78 1.39-.57 2.79-1.13 4.19-1.66zm-11.04 342.66 11.04-26.63a165.981 165.981 0 0 1-8.32-3.45l-11.03 26.64c-.95 2.29.14 4.93 2.43 5.88 2.3.95 4.93-.15 5.88-2.44zm-82.88-253.51-26.71-11.07c-2.29-.95-4.93.15-5.88 2.44-.46 1.11-.46 2.33 0 3.44s1.33 1.98 2.44 2.44l26.71 11.06c1.07-2.8 2.22-5.57 3.44-8.31zm-26.71 148.79 26.63-11.03c-.6-1.37-1.2-2.75-1.77-4.13-.58-1.4-1.13-2.79-1.67-4.19l-26.63 11.04a4.472 4.472 0 0 0-2.44 2.43 4.46 4.46 0 0 0 0 3.44c.95 2.3 3.59 3.39 5.88 2.44z" fill="#4d4d4d" />
                            <path d="M326.832 151.258c28.35 68.45-4.27 147.21-72.72 175.57-16.58 6.87-34.01 10.3-51.42 10.3-17.43 0-34.85-3.43-51.43-10.3-33.16-13.74-58.99-39.56-72.72-72.72-13.74-33.16-13.74-69.69 0-102.85 13.73-33.16 39.56-58.99 72.72-72.72 68.46-28.36 147.22 4.27 175.57 72.72zm-7.92 78.46c4.08-17.45 4.28-35.93.04-54.09l-62.76 26c.02.7.02 1.4 0 2.11l62.72 25.98zm-65.26-43.28 60.96-25.25c-.52-1.4-1.06-2.8-1.64-4.19-.57-1.39-1.18-2.77-1.8-4.12l-60.97 25.25a50.681 50.681 0 0 1 3.45 8.31zm60.91 57.71-60.91-25.23a51.244 51.244 0 0 1-3.44 8.32l60.9 25.22c1.25-2.72 2.4-5.5 3.45-8.31zm-73.32-78.54 62.78-26.01c-9.84-15.84-23.05-28.75-38.27-38.2l-25.99 62.73c.5.48.99.97 1.48 1.48zm62.75 100.14-62.72-25.98c-.49.51-.99 1-1.5 1.49l26 62.77c15.84-9.85 28.77-23.06 38.22-38.28zm-51.5 45.41-25.25-60.95c-1.33.68-2.68 1.32-4.08 1.9a56.5 56.5 0 0 1-4.23 1.54l25.25 60.96c1.4-.52 2.8-1.06 4.19-1.64 1.39-.58 2.76-1.19 4.12-1.81zm-25.26-155.98 25.24-60.92c-2.73-1.25-5.5-2.4-8.32-3.44l-25.23 60.92c2.86.91 5.64 2.07 8.31 3.44zm11.03 62.24c3.93-9.5 3.93-19.97 0-29.47-6.14-14.81-20.51-23.77-35.63-23.77-4.9 0-9.88.94-14.68 2.93-19.61 8.13-28.96 30.69-20.84 50.31 8.13 19.61 30.7 28.96 50.31 20.84 9.5-3.94 16.9-11.34 20.84-20.84zm-8.51 101.55-26.01-62.78c-.35.01-.7.03-1.06.03-.35 0-.7-.02-1.05-.03l-26.01 62.78a118.12 118.12 0 0 0 54.13 0zm-26.02-169.77 25.99-62.73a119.52 119.52 0 0 0-27.19-3.16c-8.94 0-17.96 1.02-26.9 3.1l26.01 62.79c.7-.01 1.4-.01 2.09 0zm-17.28 2.52-25.25-60.96c-1.4.52-2.8 1.06-4.2 1.64-1.39.57-2.76 1.18-4.12 1.8l25.25 60.96a56.28 56.28 0 0 1 4.08-1.91c1.4-.58 2.82-1.08 4.24-1.53zm-25.25 162.89 25.25-60.96a51.244 51.244 0 0 1-8.32-3.44l-25.25 60.95a107.295 107.295 0 0 0 8.32 3.45zm4.41-150.48-26.02-62.81c-15.58 9.65-28.61 22.69-38.27 38.27l62.81 26.01c.48-.5.98-.99 1.48-1.47zm-26.02 139.92 26.01-62.78c-.51-.49-1.01-.99-1.5-1.5l-62.78 26a118.127 118.127 0 0 0 38.27 38.28zm15.59-125.92-60.97-25.25c-.63 1.36-1.24 2.73-1.81 4.12-.58 1.39-1.12 2.79-1.64 4.19l60.98 25.26c.91-2.86 2.07-5.65 3.44-8.32zm-60.98 74.36 60.96-25.25c-.68-1.33-1.33-2.69-1.91-4.08-.58-1.4-1.08-2.82-1.53-4.24l-60.96 25.25a113.85 113.85 0 0 0 3.44 8.32zm55.01-48.76c-.02-.7-.02-1.4 0-2.09l-62.81-26.02a118.078 118.078 0 0 0 0 54.12l62.81-26.01z" fill="#4d4d4d" />
                            <path d="M228.132 192.148c5.81 14.02-.88 30.16-14.91 35.97-3.4 1.41-6.97 2.12-10.54 2.12-3.57 0-7.14-.71-10.53-2.12-6.8-2.81-12.09-8.1-14.91-14.9-2.81-6.79-2.81-14.28 0-21.07 2.82-6.8 8.11-12.09 14.91-14.91 14.03-5.81 30.16.88 35.98 14.9v.01zm-20.65 22.12c6.39-2.65 9.43-10 6.79-16.38-2-4.83-6.68-7.74-11.6-7.74-1.6 0-3.22.3-4.78.95-3.1 1.28-5.51 3.69-6.79 6.79-1.28 3.09-1.28 6.5 0 9.59s3.69 5.5 6.79 6.79c3.09 1.28 6.5 1.28 9.59 0z" fill="#4d4d4d" />
                        </svg>

                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
                            7+ years in the yachting/sailing boat industry
                        </h3>
                    </div>
                </li>

                <li className="mb-6 ml-4">
                    <span className="flex absolute -left-[6.6px] mt-[8.5px] justify-center items-center w-3 h-3 bg-blue-200 dark:bg-[#2a2e30] rounded-full" />
                    <div className="flex items-center mb-1 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470" width={22}>
                            <path fill="#fff" d="M90.596 111.313C60.998 145.745 44.698 189.671 44.698 235c0 104.766 85.233 190 190 190s190-85.234 190-190-85.233-190-190-190c-45.329 0-89.255 16.3-123.687 45.898-3.051 2.623-7.6 2.353-10.334-.543a199.703 199.703 0 0 0-10.613 10.634c2.885 2.735 3.152 7.277.532 10.324zM227.5 90.192V67.5a7.5 7.5 0 0 1 15 0v22.712c21.669 1.129 42.939 7.119 61.937 17.524a7.501 7.501 0 0 1 2.976 10.181c-.034.063-.075.119-.111.18a138.267 138.267 0 0 1 14.539 10.382l20.934-11.431a7.5 7.5 0 0 1 10.177 10.176l-11.431 20.935a138.134 138.134 0 0 1 10.382 14.54c.061-.036.118-.077.181-.111a7.5 7.5 0 0 1 10.181 2.976c10.404 18.998 16.394 40.268 17.524 61.936H402.5c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5h-22.692c-3.789 73.997-63.311 133.519-137.308 137.308V402.5a7.5 7.5 0 0 1-15 0v-22.712c-21.669-1.129-42.938-7.12-61.936-17.524a7.501 7.501 0 0 1-2.976-10.181c.034-.062.074-.118.11-.178a138.26 138.26 0 0 1-14.541-10.383l-20.932 11.43a7.496 7.496 0 0 1-8.898-1.28 7.497 7.497 0 0 1-1.279-8.897l11.429-20.932a138.206 138.206 0 0 1-10.384-14.541c-.06.035-.116.076-.177.109a7.498 7.498 0 0 1-10.181-2.976c-10.405-18.998-16.394-40.268-17.524-61.936H67.5a7.5 7.5 0 0 1 0-15h22.692C93.981 153.503 153.503 93.981 227.5 90.192z" />
                            <path fill="#f2ebd9" d="M297.231 120.892C278.248 110.496 256.729 105 235 105c-71.682 0-130 58.318-130 130 0 21.729 5.496 43.248 15.892 62.231 1.956 3.571.697 8.031-2.798 10.071a138.206 138.206 0 0 0 10.384 14.541l67.171-123.016.026-.047.042-.076c.013-.023.03-.043.043-.066.14-.25.296-.491.467-.727a7.593 7.593 0 0 1 .764-.911c.241-.24.485-.445.734-.638.062-.048.125-.093.188-.139.234-.169.475-.325.723-.464.024-.014.045-.031.069-.044l.079-.043 123.056-67.193a138.121 138.121 0 0 0-14.539-10.382 7.494 7.494 0 0 1-10.07 2.795zM274.329 271.214l-.045.082c-.013.024-.031.046-.045.07a7.46 7.46 0 0 1-.465.724c-.045.062-.089.124-.136.185a7.468 7.468 0 0 1-.633.73 7.446 7.446 0 0 1-.729.632c-.062.048-.125.093-.189.139a7.389 7.389 0 0 1-.717.461c-.026.015-.048.034-.074.048l-.087.047-123.052 67.19a138.052 138.052 0 0 0 14.541 10.383c2.041-3.493 6.5-4.753 10.071-2.797C191.752 359.504 213.271 365 235 365c71.683 0 130-58.318 130-130 0-21.728-5.495-43.247-15.892-62.23-1.955-3.57-.697-8.028 2.795-10.069a138.28 138.28 0 0 0-10.382-14.54l-67.192 123.053z" />
                            <path fill="#98d9d5" d="m255.313 265.92-51.233-51.234-61.625 112.859z" />
                            <path fill="#f2484b" d="m265.92 255.313 61.626-112.858-112.859 61.625z" />
                            <path fill="#f2484b" d="M235 15C113.691 15 15 113.691 15 235s98.691 220 220 220 220-98.691 220-220S356.309 15 235 15zm-.302 425c-113.038 0-205-91.962-205-205 0-48.915 17.588-96.314 49.523-133.465a7.5 7.5 0 0 1 10.577-.798c.094.081.177.169.266.253a199.33 199.33 0 0 1 10.613-10.634c-.081-.085-.166-.166-.243-.255a7.5 7.5 0 0 1 .798-10.577C138.384 47.587 185.783 30 234.698 30c113.038 0 205 91.962 205 205s-91.963 205-205 205z" />
                            <path fill="#082947" d="M401.17 68.83C356.784 24.444 297.771 0 235 0S113.216 24.444 68.83 68.83C24.444 113.215 0 172.229 0 235c0 62.771 24.444 121.784 68.83 166.17S172.229 470 235 470s121.784-24.444 166.17-68.83S470 297.771 470 235c0-62.771-24.444-121.785-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z" />
                            <path fill="#082947" d="M234.698 30c-48.915 0-96.313 17.587-133.465 49.523a7.5 7.5 0 0 0-.798 10.577c.077.09.162.17.243.255 2.734 2.896 7.283 3.166 10.334.543C145.443 61.3 189.369 45 234.698 45c104.767 0 190 85.234 190 190s-85.233 190-190 190-190-85.234-190-190c0-45.329 16.3-89.255 45.898-123.687 2.62-3.047 2.353-7.589-.532-10.324-.089-.084-.172-.172-.266-.253a7.503 7.503 0 0 0-10.577.798C47.286 138.686 29.698 186.085 29.698 235c0 113.038 91.962 205 205 205s205-91.962 205-205-91.963-205-205-205z" />
                            <path fill="#082947" d="M349.108 172.77C359.505 191.753 365 213.272 365 235c0 71.682-58.317 130-130 130-21.729 0-43.248-5.496-62.231-15.892-3.571-1.956-8.03-.696-10.071 2.797-.035.061-.076.116-.11.178a7.5 7.5 0 0 0 2.976 10.181c18.998 10.404 40.267 16.395 61.936 17.524V402.5a7.5 7.5 0 0 0 15 0v-22.692c73.997-3.789 133.519-63.311 137.308-137.308H402.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-22.712c-1.13-21.668-7.12-42.938-17.524-61.936a7.5 7.5 0 0 0-10.181-2.976c-.063.034-.119.075-.181.111-3.49 2.042-4.748 6.5-2.794 10.071z" />
                            <path fill="#082947" d="m198.784 195.672-.079.043c-.024.013-.045.031-.069.044a7.504 7.504 0 0 0-.723.464c-.063.046-.127.091-.188.139a7.57 7.57 0 0 0-.723.626 7.497 7.497 0 0 0-.638.735c-.047.061-.092.124-.137.187a7.47 7.47 0 0 0-.467.727c-.013.023-.03.043-.043.066l-.042.076-.026.047-67.171 123.016-11.429 20.932a7.5 7.5 0 0 0 10.177 10.177l20.932-11.43 123.021-67.173.118-.064c.026-.014.049-.033.074-.048.246-.138.484-.292.717-.461a7.446 7.446 0 0 0 .918-.771c.232-.231.438-.478.633-.73.047-.061.091-.123.136-.185a7.34 7.34 0 0 0 .465-.724c.014-.024.032-.046.045-.07l.045-.082 67.192-123.054 11.431-20.935a7.5 7.5 0 0 0-10.177-10.176l-20.934 11.431-123.058 67.193zm56.529 70.248-112.859 61.625 61.625-112.859 51.234 51.234zm10.607-10.607-51.234-51.234 112.859-61.625-61.625 112.859z" />
                            <path fill="#082947" d="M67.5 227.5a7.5 7.5 0 0 0 0 15h22.712c1.13 21.668 7.12 42.938 17.524 61.936a7.498 7.498 0 0 0 10.181 2.976c.062-.034.117-.074.177-.109 3.495-2.041 4.754-6.5 2.798-10.071C110.496 278.248 105 256.729 105 235c0-71.682 58.318-130 130-130 21.729 0 43.248 5.496 62.231 15.892 3.572 1.956 8.029.697 10.07-2.795.036-.061.077-.118.111-.18a7.501 7.501 0 0 0-2.976-10.181c-18.997-10.405-40.267-16.395-61.937-17.524V67.5a7.5 7.5 0 0 0-15 0v22.692C153.503 93.981 93.981 153.503 90.192 227.5H67.5z" />
                        </svg>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
                            Bold minded / Avid Adventurer
                        </h3>
                    </div>
                </li>
            </ol>
        </div>
    )
}