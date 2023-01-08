import Image from "next/image";
import React from "react";

const Haro = () => {
  return (
    <div
      id='Home'
      className='w-full overflow-hidden relative h-[100vh] leading-tight flex items-center px-5 xs:px-10 lap:px-28'>
        <Image src={"/background.jpg"} fill className="object-cover -z-10" alt="background" />
      <div className='w-full relative sm:pt-[170px] font-bold text-center flex flex-col items-center sm:items-start'>
        <div className='absolute w-full h-full bg-black opacity-50 blur-xl sm:hidden' />
        <h6 className='xs:text-2xl text-lg tracking-[2px] text-paragraph relative'>
          Hello, my name is
        </h6>
        <h1 className='relative my-3 text-4xl sm:my-5 xs:text-5xl lap:text-7xl'>
          Tahmid <span className='text-primary'>Ahmed</span>
        </h1>
        <h5 className='relative text-xl mb-7 sm:mb-10 xs:text-2xl lap:text-3xl'>
          I'am a Web Developer.
        </h5>
        <form
          action=''
          className='w-full xxs:w-[320px] xs:max-w-[350px] relative font-normal'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email'
            className='w-full px-5 py-2 rounded-full text-black border-[2px] border-primary outline-0'
          />
          <input
            type='submit'
            value="Let's Start"
            className='absolute top-0 px-4 py-1.5 rounded-full -translate-x-[6.9rem] shadow-btn translate-y-1 cursor-pointer bg-primary'
          />
        </form>
      </div>
    </div>
  );
};

export default Haro;
