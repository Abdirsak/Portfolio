import './About.css';
import image2 from '../../Images/Image2.jpeg';
import {FaInstagram,FaFacebook,FaTwitter,FaGithub} from 'react-icons/fa';
import React from 'react';
const About = ()=>{
    return(
        <div className="about" id='about'>
            <div className="about-image">
                <img src={image2} alt="about"/>
            </div>
            <div className="central"></div>
            <div className="main">
                <h1>About Me</h1>
                <p>My name is Abdirizak, 
                I completed my Web Developer diploma and am skilled in all phases of advanced web development. knowledgeable about testing, debugging, and user interfaces. bringing knowledge of web system design, setup, testing, and maintenance. possessing a broad and promising skill set. knowledgeable in a variety of technologies, including PHP, Java, JavaScript, C#, Python,Microsoft SQL Server, MySQL and MongoDB. I able to work in a team environment as well as efficiently manage oneself during individual tasks.</p>
                <p>I can come from different educational disciplines because Web development is one of those fields where once a programming language is learned, much of the rest of the skill set can be acquired through practice.</p>
                <p>I have Strong coding skills, Mastering programming languages such as HTML and CSS is just a start, js,React, Node , MongoDB and etc. Technology changes fast, so a willingness to always be learning new coding techniques is important for me.</p>
                <p>I can build Successful websites that can attract and keep users, as well as be visible to search engines.</p>
                <div className="social">
                    <a className='instegram' href="https://www.instagram.com/abdirizak_abdullahi26/"><FaInstagram/></a>
                    <a href="https://www.facebook.com/cabdirisaq.cabdalle/"><FaFacebook/></a>
                    <a className='twitter' href="https://twitter.com/Abdiriz84575940"><FaTwitter/></a>
                    <a className='github' href="https://github.com/Abdirsak"><FaGithub/></a>
                </div>
            </div>
        </div>
    )
}
export default About