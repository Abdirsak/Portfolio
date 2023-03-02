import './Resumes.css';
import React, { useState } from 'react';
import {FaGraduationCap,FaBriefcase,FaCode,FaHeart} from 'react-icons/fa'
import Education from './Details/Education/Education';
import Experience from './Details/Experience/Experience';
import Skills from './Details/Skills/Skills';
import Hopes from './Details/Hopes/Hopes';
const Resumes = ()=>{
    const [isActive,setIsActive]=useState('education')
    console.log(isActive==='education')
    return (
        <div className="resumes" id='resumes'>
            <div className="heading">
                <h1>Resumes</h1>
                <p>My formal Bio Details</p>
                <div className="underline">
                    <div className="center-underline"></div>
                </div>
            </div>
            <div className="main-body">
                <div className="items">
                    <div className='icons'>
                        <ul>
                            <li><FaGraduationCap/></li>
                            <li><FaBriefcase/></li>
                            <li><FaCode/></li>
                            <li><FaHeart/></li>
                        </ul>
                    </div>
                    <div className='lists'>
                    <ul>
                        <li><a style={{color: isActive==='education'&&"white"}} className={isActive==='education'&&'active'} href="#details" onClick={()=>{setIsActive('education')}}>Education</a></li>
                        <li><a style={{color: isActive==='experience'&&"white"}} className={isActive==='experience'&&'active'} href="#details" onClick={()=>{setIsActive('experience')}}>Experience</a></li>
                        <li><a style={{color: isActive==='skills'&&"white"}} className={isActive==='skills'&&'active'} href="#details" onClick={()=>{setIsActive('skills')}}>Skills</a></li>
                        <li><a style={{color: isActive==='hopes'&&"white"}} className={isActive==='hopes'&&'active'} href="#details" onClick={()=>{setIsActive('hopes')}}>Hopes</a></li>
                    </ul>
                    </div>
                </div>
                <div className="detail" id='details'>
                    {isActive==='education'&& <Education />}
                    {isActive==='experience'&& <Experience />}
                    {isActive==='hopes'&& <Hopes />}
                    {isActive==='skills'&& <Skills />}
                </div>
            </div>
        </div>
    )
}
export default Resumes