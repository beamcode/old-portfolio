import React, { useState } from 'react'

export default function CommentsSection() {
    const [message, setMessage] = useState('');

    return (
        <div className='flex flex-col shadow-md h-[270px] w-full items-center bg-[white] dark:bg-[#181A1B] border-opacity-30 rounded-md overflow-hidden'>
            <h1 className="p-2 py-1.5 text-md bg-[#e3e3e3] dark:bg-[#322b2b] dark:text-white font-bold w-full rounded-t-md text-center">Comments</h1>

            <div className="flex h-full w-full grow overflow-y-scroll items-center justify-center">
                <h1 className='text-[white] bg-[#a81111] p-2 rounded font-bold'>Offline</h1>
            </div>

            <div className="flex w-full h-fit">
                <input
                    className="w-full text-sm p-[10px] h-fit bg-[#f0f0f0] dark:bg-[#202325] dark:placeholder-[#676662] focus:outline-none resize-none dark:text-white"
                    placeholder="Type a message..."
                    name="msg"
                    value = {message}
                    onChange={e => setMessage(e.target.value)}
                    required />
                <button className="w-[70px] bg-[#328bf0] dark:bg-[#2856a5] text-white" onClick={() => setMessage('')}>Send</button>
            </div>
        </div>
    )
}