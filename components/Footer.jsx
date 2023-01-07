import React from "react";
import { Facebook, Instagram, Twitter } from "./SvgIcons";

const Footer = () => {
  return (
    <footer
      id='ContactUs'
      className='flex flex-col items-center w-full px-3 pt-16 pb-3 text-center sm:pt-20 bg-bg1'>
      <h3 className='mb-5 text-xl font-bold sm:text-3xl'>Tahmid Ahmed</h3>
      <p className='text-sm font-medium'>
        For more HTML, CSS, and coding tutorial - please click on the link below
        <br /> to subscribe to my channel:
      </p>
      <div className='w-[200px] flex justify-around items-center my-5 sm:my-7 '>
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
      <p className='text-sm font-normal text-primary'>
        CopyRight By Tahmid Ahmed
      </p>
    </footer>
  );
};

export default Footer;
