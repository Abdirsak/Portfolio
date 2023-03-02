import React, { useRef, useState } from 'react';
import {FaInstagram,FaFacebook,FaTwitter,FaGithub} from 'react-icons/fa';
import './Contact.css';
import messagePic from '../../Images/message2.jpg';
import emailjs from '@emailjs/browser'
const Contacts = ()=>{
    const [name, setName]= useState('');
    const [email, setEmail]= useState('')
    const [message, setMessage]= useState('');
    const Form = useRef();
    const submitHandler = (e)=>{
        e. preventDefault()
        if(name.length>0 && email.length>0 && message.length>0){
            emailjs.sendForm('service_20x4gwd', 'template_q1rpaun', Form.current, 'QNNu9y-avgBpHZl5J')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
             console.log(error.text);
        });
            alert("message was sent")
        }
        else{
            alert("feilds must be fill")
        }
    }
    
    return(
        <div className="contacts" id='contact'>
            <div className="heading">
                <h1>Contact Me</h1>
                <p>Lets Keep in Touch</p>
                <div className="underline">
                    <div className="center-underline"></div>
                </div>
            </div>
            <div className="contact-body">
                <div className="side">
                    <h1>Get In Touch</h1>
                    <div className="social">
                        <a className='instegram' href="https://www.instagram.com/abdirizak_abdullahi26/"><FaInstagram/></a>
                        <a href="https://www.facebook.com/cabdirisaq.cabdalle/"><FaFacebook/></a>
                        <a className='twitter' href="https://twitter.com/Abdiriz84575940"><FaTwitter/></a>
                        <a className='github' href="https://github.com/Abdirsak"><FaGithub/></a>
                    </div>
                    <p>Send Your Email Here</p>
                    <img src={messagePic} alt='img' />
                </div>
                <div className="form-part">
                    <form ref= {Form} onSubmit={submitHandler}>
                        <label>Name</label>
                        <input type='text' name='user_name' onChange={(e)=>setName(e.target.value)}/>
                        <label>Email</label>
                        <input type='email' name='from_name' onChange={(e)=>setEmail(e.target.value)}/>
                        <label>Message</label>
                        <textarea name='message' onChange={(e)=>setMessage(e.target.value)}/>
                        <input type='submit' value='Send' className='button' />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contacts