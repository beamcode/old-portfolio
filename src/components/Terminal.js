import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import { ReactTerminal } from "react-terminal";

const timeDate = moment().format("ddd MMM D HH:mm:ss").toString()

export default function MacTerminal() {
    const [extend, setExtend] = useState(false)
    const [show, setShow] = useState(true)
    const [cleared, setCleared] = useState(false)
    const [command, setCommand] = useState('')
    const [history, setHistory] = useState([])

    const commands = {
        whoami: "jackharper",
        cd: (directory) => `changed path to ${directory}`
    }

    function checkCommands() {
        var toAdd = []

        toAdd.push(<span className="pb-1 break-all">Beam:Devprojects beam$ {command}</span>)
        if (command == "clear" || command == "cl") {
            setHistory([])
            setCommand('')
            setCleared(true)
            return
        }
        else if (command == "whoami")
            toAdd.push(<span className="pb-1 break-all">carrots</span>)
        else if (command == "mathieu")
            toAdd.push(<span className="pb-1 break-all">Mathieu suce des gros chibre</span>)
        else if (command.indexOf("cd ", 0) == 0 || command === 'cd')
            toAdd.push(<span className="pb-1 break-all">error: this thing is still in dev</span>)
        else if (command == "ls") {
            toAdd.push(<span className="pb-1 break-all whitespace-pre">secret_stuff   archive.zip   docs</span>)
            toAdd.push(<span className="pb-1 break-all whitespace-pre">pics           sshkeys</span>)
        }
        else if (command && command.trim().length) {
            toAdd.push(<span className="pb-1 break-all">zsh: command not found: {command}</span>)
        }
        console.log(command)
        setCommand('')
        setHistory([...toAdd.reverse(), ...history])
    }

    return (
        <>
            {/* <div className='max-w-[310px] max-h-[300px] h-full overflow-y-auto'>
                <ReactTerminal
                    commands={commands}
                />
            </div> */}
            {show &&
                <div className={`flex flex-col w-full min-h-[256px] ${extend && 'h-full'} rounded-lg`}>
                    <div className="flex items-center h-fit px-[6px] py-[2px] rounded-t-lg bg-gray-100 dark:bg-[#322b2b] border-b border-gray-500 text-center text-black">
                        <div className='flex gap-[6px] group'>
                            <button onClick={() => setShow(val => !val)} className="relative flex border-red-900 bg-red-500 shadow-inner rounded-full w-[10px] h-[10px] justify-center items-center">
                                <svg viewBox='0.15 -0.05 25 25' className='invisible group-hover:visible absolute' width='8.5px' style={{ opacity: 0.5 }} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            <button onClick={() => { }} className="flex border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-[10px] h-[10px] justify-center items-center">
                                <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='10' style={{ opacity: 0.5 }} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>

                            <div onClick={() => setExtend(val => !val)} className="flex border-green-900 bg-green-500 shadow-inner rounded-full w-[10px] h-[10px] justify-center items-center">
                                <svg viewBox='0 0 24 24' className='invisible group-hover:visible' width='5' style={{ opacity: 0.5 }} >
                                    <path d="M0,17.45V2.64A2.64,2.64,0,0,1,2.64,0h14.8a.56.56,0,0,1,.4,1L.93,17.84A.55.55,0,0,1,0,17.45Z" />
                                    <path d="M21.35,24H6.56a.56.56,0,0,1-.4-.95L23.07,6.16a.55.55,0,0,1,.93.39v14.8A2.64,2.64,0,0,1,21.35,24Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mx-auto pr-[45px]">
                            <p className="text-center text-sm font-bold dark:text-[#736c6c]">Terminal</p>
                        </div>
                    </div>

                    <div className='relative flex grow shadow-2xl subpixel-antialiased rounded-b-lg bg-[#242423] dark:bg-[black] bg-opacity-70 overflow-y-scroll'>
                        <div className='absolute p-1 flex flex-col-reverse text-green-200 font-mono text-xs overflow-y-scroll h-fit w-full'>
                            <div className='flex shrink'>
                                <span className="pb-1 whitespace-pre">Beam:Devprojects beam$ </span>
                                <input
                                    className="w-full bg-transparent focus:outline-none resize-none"
                                    placeholder=""
                                    name="command"
                                    value={command}
                                    onChange={e => setCommand(e.target.value)}
                                    onKeyDown={(evt) => {
                                        if (evt.code == "Enter")
                                            checkCommands()
                                    }}
                                    required />
                            </div>

                            <div className='flex flex-col-reverse w-fit'>
                                {history.map((val, key) => <div key={key}>{val}</div>)}
                            </div>

                            {!cleared && <p className="pb-1">Last login: {timeDate} on ttys002</p>}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
