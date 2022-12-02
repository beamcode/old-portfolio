import React from 'react'

export default function MacTerminal() {
    return (
        <div class="w-full">
            <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black">
                <div className='flex gap-[6px] ml-2 group'>
                    <div class="flex border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3 justify-center items-center">
                        <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='9' style={{ opacity: 0.5 }} stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>

                    <div class="flex border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3 justify-center items-center">
                        <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='10' style={{ opacity: 0.5 }} stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>

                    <div class="flex border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3 justify-center items-center">
                        <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='5' style={{ opacity: 0.5 }} >
                            <path d="M0,17.45V2.64A2.64,2.64,0,0,1,2.64,0h14.8a.56.56,0,0,1,.4,1L.93,17.84A.55.55,0,0,1,0,17.45Z" />
                            <path d="M21.35,24H6.56a.56.56,0,0,1-.4-.95L23.07,6.16a.55.55,0,0,1,.93.39v14.8A2.64,2.64,0,0,1,21.35,24Z" />
                        </svg>
                    </div>
                </div>
                <div class="mx-auto pr-16">
                    <p class="text-center text-sm">Terminal</p>
                </div>

            </div>
            <div class="w-full shadow-2xl subpixel-antialiased rounded-b h-64 border-black mx-auto bg-[black] bg-opacity-70">
                <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs" id="console">
                    <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
                    <p class="pb-1">Beam:Devprojects beam$</p>
                </div>
            </div>
        </div>
    )
}