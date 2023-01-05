import moment from "moment";
import React from "react";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full">
            <div className="flex max-w-[1000px] p-2 mb-5 mt-4 rounded-xl items-center justify-center w-full bg-[white] dark:bg-[#181A1B] mx-3 md:mx-0">
                <p className='text-[gray] text-sm whitespace-pre'>{moment().format('YYYY')} © </p>
                <p className='text-[gray] text-sm'>Made with loathe 👹 by Beamcode</p>
            </div>
        </footer>
    )
}