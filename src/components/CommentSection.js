import React, { useState } from 'react'

export default function CommentsSection() {
    const [message, setMessage] = useState('');

    return (
        <div className='flex flex-col shadow-md min-h-[270px] w-full items-center bg-[white] border-opacity-30 rounded-md overflow-hidden'>
            <h1 className="p-2 text-md bg-[#1a253f] text-white font-bold w-full rounded-md text-center">Leave me a comment!</h1>

            <div className="flex h-full w-full grow overflow-y-scroll items-center justify-center bg-[#d6d6d6]">
                <h1 className='text-[white] bg-[#fc3223] p-2 rounded-xl font-bold'>Offline for now... sorry</h1>
            </div>

            <div className="flex w-full h-fit">
                <input
                    className="w-full text-sm p-[10px] h-fit bg-[#f0f0f0] focus:outline-none resize-none"
                    placeholder="Type a message.."
                    name="msg"
                    value = {message}
                    onChange={e => setMessage(e.target.value)}
                    required />
                <button className="w-[70px] bg-[#328bf0] text-white" onClick={() => setMessage('')}>Send</button>
            </div>
        </div>
    )
}