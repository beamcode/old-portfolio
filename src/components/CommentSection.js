import React from 'react'

export default function CommentsSection() {
    return (
        <div className='flex flex-col shadow-md min-h-[100px] h-[300px] w-full items-center bg-[white] border-opacity-30 rounded-md overflow-hidden'>
            <h1 className="p-2 text-md bg-[#1a253f] text-white font-bold w-full text-center">Leave me a comment!</h1>

            <div className="h-full w-full overflow-scroll">

            </div>

            <div className="flex w-full h-fit">
                <textarea className="w-full p-[10px] bg-[#f0f0f0] focus:outline-none resize-none" placeholder="Type a message.." name="msg" required />
                <button className="w-[70px] bg-[#328bf0] text-white">Send</button>
            </div>
        </div>
    )
}