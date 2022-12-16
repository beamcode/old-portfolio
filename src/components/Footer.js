import moment from "moment";
import React from "react";

export default function Footer() {
    return (
        <footer className="flex w-full max-w-[1000px] p-2 mb-10 rounded-xl items-center justify-center bg-[white] dark:bg-[#181A1B]">
            <p className='text-[gray] text-sm whitespace-pre'>{moment().format('YYYY')} © </p>
            <p className='text-[gray] text-sm'>Made with hate 👹 by Beamcode</p>
        </footer>
    )
}