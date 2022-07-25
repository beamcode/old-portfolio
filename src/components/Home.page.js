import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage({ }) {
    return (
        <React.Fragment>
            <main className="w-screen flex flex-col justify-between ">
                <Navbar />
                <div class='flex flex-col h-[10000px] w-full items-center gap-4'>

                    <div class='flex h-full w-[800px] flex w-fit justify-center border-[1px] border-black backdrop-blur-md '>
                        <h1 class='text-black text-xl text-bold'>Web Developer, mobile developer</h1>
                    </div>
                    {/* <div class='flex p-3 w-fit rounded-2xl justify-center border-2 border-black backdrop-blur-md hover:p-2 hover:m-1 cursor-pointer'>
                            <h1 class='text-black text-xl text-bold'>Life or death ?</h1>
                        </div>
                        <div class='flex p-3 w-fit rounded-2xl justify-center border-2 border-black backdrop-blur-md hover:p-2 hover:m-1 cursor-pointer'>
                            <h1 class='text-black text-xl text-bold'>43 ?</h1>
                        </div>
                        <div class='flex p-3 w-fit rounded-2xl justify-center border-2 border-black backdrop-blur-md hover:p-2 hover:m-1 cursor-pointer'>
                            <h1 class='text-black text-xl text-bold'>Stfu, please go on ?</h1>
                        </div>
                        <div class='flex p-3 w-fit rounded-2xl justify-center border-2 border-black backdrop-blur-md hover:p-2 hover:m-1 cursor-pointer'>
                            <h1 class='text-black text-xl text-bold'>What is the meaning of live ?</h1>
                        </div> */}
                </div>
                <Footer />
            </main>
        </React.Fragment>
    )
}