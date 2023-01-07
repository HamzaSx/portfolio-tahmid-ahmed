import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <section
      id='AboutUs'
      className='w-full px-5 xs:px-10 py-20 bg-bg2 sm:px-28 min-h-[100vh]'>
      <div className='flex justify-center gap-10 flex-col-reverse items-center lap:items-center lap:flex-row w-full min-h-[95vh]'>
        <div className='relative w-full max-w-[280px] xs:max-w-none xs:w-[370px] xs:h-[480px] md:w-[430px] h-[394px] md:h-[540px]'>
          <Image
            src='/main-img.png'
            alt='Tahmid Ahmed'
            fill
            className='object-cover'
          />
        </div>
        <div className='max-w-[370px] xs:w-[370px] lap:w-[436px] flex flex-col justify-center text-center lap:text-left items-center lap:items-start'>
          <h2 className='mb-5 text-5xl font-bold sm:text-6xl'>About Me</h2>
          <h5 className='mb-3 text-xl font-semibold sm:text-3xl'>
            Developer <span className='text-primary'>& Designer</span>
          </h5>
          <p className='mb-5 text-sm leading-relaxed sm:font-medium text-paragraph lap:mb-11'>
            I am a front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations.I can provide clean code and pixel perfect design. I
            also make the website more & more interactive with web animations.A
            responsive design makes your website accessible to all users,
            regardless of their device.
          </p>
          <button className='px-4 w-fit py-1.5 transition-all border-2 rounded-full bg-primary border-primary hover:bg-transparent'>
            Let's Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
