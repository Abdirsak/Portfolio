import React, { useEffect, useRef } from "react";
import Typed from 'typed.js'
import './Home.css';
import image1 from '../../Images/Image1.jpeg';
import cv from '../../CV/Abdirizak Abdullahi Hassan.pdf';
const Home = ()=>{
    const el = useRef(null)
    const typed = useRef(null)
    const download=()=>{
        fetch(cv).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Abdirizak.pdf';
                alink.click();
            })
        })
    }
    useEffect(()=>{
        const options = {
            strings: [
                'FullStack Developer',
                'Main Stack Developer',
                'Web Designer'
          ],
          typeSpeed: 100,
          backSpeed: 100,
          loop : true
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
          }
    },[])
    return (
        <div className="Home" id="home">
            <div className="contents">
                <div className="header">
                    <h2>Hello I'M <span className="special">Abdirizak</span></h2>
                </div>
                <div className="title">
                    <span className="animation" ref={el}></span>
                </div>
                <div className="body">
                    <p>I am a web developer and I design and maintain websites for clients. and I program code that makes a website function a certain way. Specially creating websites that is user-friendly and easy to navigate.</p>
                </div>
                <div className="buttons">
                    <a href="#contact">Hire me</a>
                    <button onClick={download}>Download CV</button>
                </div>
            </div>
            <div className="image">
                <img src={image1} alt="Abdirizak"/>
            </div>
        </div>
    )
}
export default Home