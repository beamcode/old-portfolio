import React, { useState } from 'react'

const quotes = [
    {
        quote: "If you don't think you have enough time in your day to get things done, then remember that Elon Musk had the time to play all of Elden Ring while scaling an electric car company, building spaceships, and putting in an offer to buy Twitter.",
        author: "@joshterryplays"
    },
    {
        quote: "You have plenty of time, you're just not using it to your best advantage. A sure way to never acheive your goals is to tell yourself that you're going to to them later. You're either doing it now or you're not doing it at all.",
        author: "@notmattgraham"
    },
    {
        quote: "Running is terrible, running is the worst. It get easier, everyday it gets a little easier. But you gotta do it everyday. That's the hard part... But it does get easier. Ok.",
        author: "BoJack Horseman Out to Sea (s02e12)"
    },
    {
        quote: "Five increasingly painful truth that would dramatically improve your life, It's hard so move on if you're not ready to hear this. One. You said you start months ago, yet no progress. You'll be in the same place next year. Call yourself out. Stop putting it off. Two. Successful People are not constantly glued to their screens, watching motivation and productivity videos. Take what you need to put yourself away and do what you already know you need to do. Three. Being busy is a convenient excuse to avoid doing the things you afraid to do. Catch yourself when you know you're avoiding. Four. No one wants to hear you complain about your problems for the 10th time and what you do nothing about it. Figure out what you need to do. Create a plan and execute. Five. Whether you like it or not, your life and your opportunity window is disappearing faster than you realize. It's not coming back. Take ownership, step out of your comfort zone and take action.",
        author: "@james.ck.lim"
    },
    {
        quote: "Hey man, quick little reminder before you actually passout tonight, like you did a good job today. A really good job. Don't worry about no bullshit that came through, the day is done. Pack it up, get some rest, you deserve it. But remember this before you actually go to sleep. You're worth it. Everything you've done, everything you're going to do, everyone's fucking proud of you. I'm proud of you. So just know you did good today, all right? Love.",
        author: "@itsclaveriia"
    }
]

export default function RandomQuotes() {
    const [counter, setCounter] = useState(Math.floor(Math.random() * quotes.length))

    function next() {
        if (counter >= quotes.length - 1)
            setCounter(0)
        else
            setCounter(counter + 1)
    }

    return (
        <div className='flex flex-col min-h-[300px] w-full h-full max-h-[400px] shadow-md bg-[white] dark:bg-[#181A1B] rounded-md overflow-hidden'>
            <h1 className="p-2 text-md bg-[#e3e3e3] dark:bg-[#322b2b] dark:text-white rounded-t-md font-bold w-full text-center">Quotes</h1>
            <div className="grow overflow-y-scroll mx-6 relative items-center justify-center">
                <div className='absolute flex flex-col gap-4 w-full h-fit pr-2 pb-10 pt-4'>
                    <q className="italic text-gray-600 dark:text-gray-400">{quotes[counter].quote}</q>
                    <h1 className='dark:text-gray-200'>- {quotes[counter].author}</h1>
                </div>
            </div>
            <button onClick={() => next()} className="bg-[gray] dark:bg-gray-700 active:bg-[orange] dark:active:bg-gray-800 justify-center h-[40px] rounded-lg mx-2 mb-2 shadow text-white dark:text-white">New quote</button>
        </div>
    )
}
