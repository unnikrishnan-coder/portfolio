"use client"
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

type Testimonial = {
  feedback: string
  name: string
  company: string
}

type Brand = {
  _id: number
  name: string
  imgUrl: string
}

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Array<Testimonial> | []>([]);
  const [brands, setBrands] = useState<Array<Brand> | []>([]);

  const handleClick = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    
    <>
    {/*  */}

    {
      testimonials.length > 0 ? 
          <>
            <div className="app__testimonial-item app__flex">
              {/* <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} /> */}
              <div className="app__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                </div>
              </div>
            </div>
  
            <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
  
              <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </>
       : null
    }
      {
        brands.length > 0 ?
        <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> : null
      }
      

      {/*  */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg',
);