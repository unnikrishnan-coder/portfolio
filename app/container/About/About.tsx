"use client"
import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import Image from 'next/image';
import about1 from '../../../public/images/about01.png';

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  const abouts = [
    {
      title: "Web Development Intern",
      description:"I am a passionate tech enthusiast who constantly tries to upskill myself.",
      imgUrl:about1
    },
    {
      title: "Web Development Intern",
      description:"I am a passionate tech enthusiast who constantly tries to upskill myself.",
      imgUrl:about1
    },
    {
      title: "Web Development Intern",
      description:"I am a passionate tech enthusiast who constantly tries to upskill myself.",
      imgUrl:about1
    },
    {
      title: "Web Development Intern",
      description:"I am a passionate tech enthusiast who constantly tries to upskill myself.",
      imgUrl:about1
    }
  ]

  return (
    <>
      <h2 className="head-text">I know That <span>Good Design</span><br /> means<span> Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);