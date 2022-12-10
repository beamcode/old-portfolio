import './App.css';
import React, { Fragment, useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home.page';
import AnimBg from './components/VantaBackground';

export default function App() {
    // document.body.classList.add('bg-earth')
    // document.body.classList.add('bg-cover')
    // document.body.classList.add('bg-fixed')
    // document.body.classList.add('min-w-fit')
    document.body.classList.add('bg-[black]')
    document.documentElement.classList.add('dark')

    return (
        <>
            <AnimBg className='fixed top-0 left-0 z-[-10] w-full h-full' />
            <div className='lg:mx-0 pt-[10px] lg:pt-[60px] mx-[10px] gap-6 flex flex-col items-center justify-center'>
                {/* <Navbar /> */}
                <main>
                    <HomePage />
                </main>
                <Footer />
            </div>
        </>
    )
}
