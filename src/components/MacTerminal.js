import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import { ReactTerminal } from "react-terminal";

export default function MacTerminal() {
    const [show, setShow] = useState(true)
    const [cleared, setCleared] = useState(false)
    const [command, setCommand] = useState('')
    const [history, setHistory] = useState([])
    const timeDate = moment().format("ddd MMM D HH:mm:ss")

    const commands = {
        whoami: "jackharper",
        cd: (directory) => `changed path to ${directory}`
    }

    function checkCommands() {
        if (command == "clear" || command == "cl") {
            setHistory([])
            setCleared(true)
        }
        if (command == "whoami")
            history.unshift(<span className="pb-1 break-all">root</span>)

        if (command == "cd")
            history.unshift(<span className="pb-1 break-all">error: this thing is still in dev</span>)
        if (command == "ls") {
            history.unshift(<span className="pb-1 break-all whitespace-pre">secret_stuff   archive.zip   docs</span>)
            history.unshift(<span className="pb-1 break-all whitespace-pre">pics           sshkeys</span>)
        }
    }

    return (
        <>
            {/* <div className='max-w-[310px] max-h-[300px] h-full overflow-y-auto'>
                <ReactTerminal
                    commands={commands}
                />
            </div> */}
            {show &&
                <div className="w-full lg:max-w-[282px]">
                    <div className="flex items-center h-6 rounded-t-lg bg-gray-100 border-b border-gray-500 text-center text-black">
                        <div className='flex gap-[6px] ml-[6px] mt-[2px] group'>
                            <button onClick={() => setShow(false)} className="flex border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3 justify-center items-center">
                                <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='9' style={{ opacity: 0.5 }} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            <button onClick={() => {}}  className="flex border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3 justify-center items-center">
                                <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='10' style={{ opacity: 0.5 }} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>

                            <div className="flex border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3 justify-center items-center">
                                <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='5' style={{ opacity: 0.5 }} >
                                    <path d="M0,17.45V2.64A2.64,2.64,0,0,1,2.64,0h14.8a.56.56,0,0,1,.4,1L.93,17.84A.55.55,0,0,1,0,17.45Z" />
                                    <path d="M21.35,24H6.56a.56.56,0,0,1-.4-.95L23.07,6.16a.55.55,0,0,1,.93.39v14.8A2.64,2.64,0,0,1,21.35,24Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mx-auto pr-16">
                            <p className="text-center text-sm">Terminal</p>
                        </div>

                    </div>
                    <div className="flex w-full shadow-2xl subpixel-antialiased rounded-b-lg h-64 border-black mx-auto bg-[black] bg-opacity-70">
                        <div className="flex pl-1 pt-1 text-green-200 font-mono overflow-y-scroll text-xs">
                            <div className='flex flex-col-reverse overflow-y-scroll h-fit'>
                                <div className='flex shrink'>
                                    <span className="pb-1 whitespace-pre">Beam:Devprojects beam$ </span>
                                    <input
                                        className="w-full bg-transparent focus:outline-none resize-none"
                                        placeholder=""
                                        name="command"
                                        value={command}
                                        onChange={e => setCommand(e.target.value)}
                                        onKeyDown={(evt) => {
                                            if (evt.code == "Enter") {
                                                setCommand('')
                                                history.unshift(<span className="pb-1 break-all">Beam:Devprojects beam$ {command}</span>)
                                                checkCommands()
                                            }
                                        }}
                                        required />
                                </div>

                                <div className='flex flex-col-reverse w-fit max-w-[300px]'>
                                    {history.map((val) => val)}
                                </div>

                                {!cleared && <p className="pb-1">Last login: {timeDate} on ttys002</p>}
                            </div>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}
//Wed Sep 25 09:11:04
