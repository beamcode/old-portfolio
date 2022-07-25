import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home.page';

function App() {
    //bg-earth bg-cover
    document.body.classList.add('bg-earth')
    document.body.classList.add('bg-cover')
    document.body.classList.add('bg-fixed')
    
    return (
        <Fragment>
            <HomePage/>
        </Fragment>
    )
}

export default App;
