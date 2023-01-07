import React from "react";
import { Source, Bell, User } from "./SvgIcons";

const boxes = () => {
  const theBox = [
    {
      img: <Source />,
      title: "Web Development",
      text: "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
    },
    {
      img: <User />,
      title: "User Experience",
      text: "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
    },
    {
      img: <Bell />,
      title: "Notification",
      text: "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
    },
  ];

  let boxes = theBox.map(({ img, title, text }, index) => (
    <div
      key={`${index}`}
      className='bg-bg2 w-[280px] md:w-[320px] h-[365px] rounded-xl flex flex-col items-center py-7 sm:px-9 px-3'>
      {img}
      <h5 className='text-lg font-bold'>{title}</h5>
      <p className='mt-4 mb-6 text-paragraph'>{text}</p>
      <button className='px-4 py-1.5 transition-all border-2 rounded-full bg-primary border-primary hover:bg-transparent'>
        Read More
      </button>
    </div>
  ));

  return boxes;
};

const Services = () => {
  return (
    <section id='Services' className='py-20 min-h-[100vh] bg-bg1 px-5 sm:px-28'>
      <div className='title'>
        <h2 className='text-5xl font-bold text-center sm:text-6xl'>
          Our Services
        </h2>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-10 mt-10 text-center box'>
        {boxes()}
      </div>
    </section>
  );
};

export default Services;
