import React from 'react'

export default function RandomQuotes() {
    return (
        <div class='flex flex-col w-full min-h-[100px] shadow-md bg-[white] border-opacity-30 rounded-md overflow-hidden'>
            <h1 className="p-2 text-md bg-[#1a253f] text-white font-bold w-full text-center">Random Quotes</h1>
            <div className="w-full p-6">
                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
            </div>
            <button className="bg-[white] justify-center h-[40px] rounded-lg m-2 border border-[red]">New quote</button>
        </div>
    )
}
