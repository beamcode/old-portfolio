import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home.page';

function App() {
    //bg-earth bg-cover
    document.body.classList.add('bg-earth')
    document.body.classList.add('bg-cover')
    document.body.classList.add('bg-fixed')
    document.body.classList.add('bg-[black]')
    document.body.classList.add('min-w-fit')
    // document.body.classList.add('bg-[#ebf0f6]')

    return (
        <div className='lg:mx-0 mx-[50px] gap-6 flex flex-col items-center justify-center'>
            <Navbar />

            <main>
                <HomePage />
            </main>

            <Footer />

        </div>
    )
}

export default App;
