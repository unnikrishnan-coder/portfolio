"use client"
import {useState} from 'react';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import './Footer.scss';
import Image from 'next/image';

const Footer = () => {
  const [data,setData] = useState({name:"",email:"",message:""});
  const [loading,setLoading] = useState(false);
  const [submitted,setSubmitted] = useState(false);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData((val)=>{return {...val,[name]:value}})
  };

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/contact",{
      method: "POST",
      body:JSON.stringify(data)
    }).then((res)=>{
        setData({name:"",email:"",message:""});
        setLoading(false);
        setSubmitted(true);
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image src="/images/email.png" alt="email" width={40} height={40}/>
          <a href="mailto:unnikrishnang628@gmail.com" className="p-text">unnikrishnang628@gmail.com</a>
        </div>
      </div>
      {
        !submitted?(
          <form onSubmit={handleSubmit} className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" value={data.name} onChange={handleChange} type="text" placeholder="Your Name" name="name"  required/>
        </div>
        <div className="app__flex">
          <input className="p-text" value={data.email} onChange={handleChange} type="email" placeholder="Your Email" name="email"  required/>
        </div>
        <div>
          <textarea className="p-text" value={data.message} onChange={handleChange} placeholder="Your Message" name="message" required/>
        </div>
        <button type="submit" className="p-text">{loading ? "Submitting.." : "Submit"}</button>
      </form>
        )
        : <div className='bg-[#f2f7fb] p-4 rounded-lg text-[#6b7688]'>
          <h1>You have already submitted the form</h1>
        </div>
        
      }
        
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);