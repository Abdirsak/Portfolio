import React, { useState, useEffect } from 'react';
import './Header.css';
const Header = ()=>{
    return(
        <div className="container">
            <div className="logo">
                <h1><span className='special'>Abdi</span>rizak</h1>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resumes">Resumes</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header
               
                        