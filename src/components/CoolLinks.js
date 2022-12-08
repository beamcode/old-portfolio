import React from 'react'

export default function CoolLinks() {
    return (
        <div className='flex flex-col shadow-md w-full items-center bg-[white] border-opacity-30 rounded-md'>
            <h1 className="p-2 text-md bg-[#1a253f] text-white font-bold w-full text-center rounded-t-md">Cool Links</h1>

            <div className="flex p-5 flex-col grow rounded-md w-full">
                <a className="text-[blue] hover:text-[orange] underline" target="_blank" href="https://www.youtube.com/watch?v=FNoVD-ljVBM">Tokyo in 1993</a>
                <a className="text-[blue] hover:text-[orange] underline" target="_blank" href="https://ia802802.us.archive.org/29/items/THE48LAWSOFPOWER_201810/THE%2048%20LAWS%20OF%20POWER.pdf">48 laws of power book</a>
                <a className="text-[blue] hover:text-[orange] underline" target="_blank" href="https://www.youtube.com/watch?v=01ZCnCXpG4A">Importance of consistency</a>
                <a className="text-[blue] hover:text-[orange] underline" target="_blank" href="https://www.youtube.com/watch?v=3vuT8ki9yM4">Ricky Gervais roasts celebrities</a>
                <a className="text-[blue] hover:text-[orange] underline" target="_blank" href="https://www.youtube.com/@GiraffeAcademy">Best coding teacher</a>
            </div>
        </div>
    )
}