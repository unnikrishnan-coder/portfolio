"use client"
import './About.scss';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import Image from 'next/image';
import about1 from '@/public/images/about01.png';
import about2 from '@/public/images/about02.png';
import about3 from '@/public/images/about03.png';
import about4 from '@/public/images/about04.png';

const About = () => {

  const abouts = [
    {
      title: "Passionate Engineering Student",
      description:"I am a passionate tech enthusiast who constantly tries to upskill myself and currently in my final year of Computer Science and Engineering degree.",
      imgUrl:about1
    },
    {
      title: "Learning By Doing",
      description:"I prefer creating projects in order to learn something and this helped me in developing practical knowledge of web development",
      imgUrl:about2
    },
    {
      title: "Experienced Team Player",
      description:"Adaptability is my strength.I swiftly align with evolving project needs while providing support to team members, ensuring a positive and efficient workflow.Got the opportunity to lead different teams.",
      imgUrl:about3
    },
    {
      title: "Aspiring Web Developer",
      description:"Developed experience in the field of web development by creating projects using technologies like python,javascript..",
      imgUrl:about4
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