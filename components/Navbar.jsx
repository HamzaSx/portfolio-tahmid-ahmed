import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const animateMenu = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: 10,
      opacity: 0,
    },
  };
  const initalItems = { y: 8, opacity: 0 };

  return (
    <nav className='absolute top-0 z-50 flex items-center justify-between w-full font-bold'>
      <div className='items-center justify-between hidden w-full px-5 py-10 sm:flex xs:px-10 lap:px-28'>
        <h2 className='text-4xl select-none cursor-default font-bold tracking-[1px]'>
          Portfo
          <span className='text-primary'>lio</span>
        </h2>
        <ul className='flex justify-between font-semibold'>
          <li>
            <Link
              smooth={true}
              to='Home'
              href=''
              className='cursor-pointer px-2.5 transition-colors lap:px-5 md:px-6 hover:text-primary'>
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to='AboutUs'
              offset={70}
              href=''
              className='cursor-pointer px-2.5 transition-colors lap:px-5 md:px-6 hover:text-primary'>
              About Us
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to='Services'
              href=''
              className='cursor-pointer px-2.5 transition-colors lap:px-5 md:px-6 hover:text-primary'>
              Services
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to='Skills'
              href=''
              className='cursor-pointer px-2.5 transition-colors lap:px-5 md:px-6 hover:text-primary'>
              Skills
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to='ContactUs'
              href=''
              className='cursor-pointer px-2.5 transition-colors lap:px-5 md:px-6 hover:text-primary'>
              Contact Us
            </Link>
          </li>
        </ul>
        <button className='px-5 py-2 transition-transform rounded-full bg-primary hover:scale-110 active:scale-95'>
          Subscribe
        </button>
      </div>
      <div className='w-full sm:hidden'>
        <div className='flex items-center justify-between px-5 py-10 xs:px-10 sm:px-28'>
          <h2 className='text-3xl select-none cursor-default z-50 font-bold tracking-[1px]'>
            Portfo
            <span className='text-primary'>lio</span>
          </h2>
          <motion.button
            id='menu'
            onClick={() => setMenu(!menu)}
            className='relative z-50 flex flex-col items-center justify-center gap-1 w-14 h-14'>
            <motion.div
              animate={menu ? "open" : "close"}
              variants={{
                open: {
                  rotate: "-45deg",
                  y: 8,
                  transition: {
                    duration: 0.3,
                    rotate: {
                      delay: 0.4,
                    },
                  },
                },
                close: {
                  rotate: "0deg",
                  y: 0,
                  transition: {
                    duration: 0.3,
                    y: {
                      delay: 0.4,
                    },
                  },
                },
              }}
              className='w-8 relative z-50 h-[4px] rounded-3xl bg-primary'
            />
            <motion.div
              animate={menu ? "open" : ""}
              variants={{
                open: {
                  visibility: "hidden",
                },
              }}
              transition={{ delay: 0.4 }}
              className='w-8 relative z-50 h-[4px] rounded-3xl bg-primary'
            />
            <motion.div
              animate={menu ? "open" : "close"}
              variants={{
                open: {
                  rotate: "45deg",
                  y: -8,
                  transition: {
                    duration: 0.3,
                    rotate: {
                      delay: 0.4,
                    },
                  },
                },
                close: {
                  rotate: "0deg",
                  y: 0,
                  transition: {
                    duration: 0.3,
                    y: {
                      delay: 0.4,
                    },
                  },
                },
              }}
              className='w-8 relative z-50 h-[4px] rounded-3xl bg-primary'
            />
          </motion.button>
        </div>

        <motion.div
          initial={{ height: "50vh" }}
          animate={menu ? "open" : "close"}
          variants={{
            open: {
              height: "100vh",
            },
            close: {
              height: "50vh",
              transition: {
                delay: 1.5,
              },
            },
          }}
          className='absolute top-0 right-0 overflow-hidden px-6 z-40 w-[64vw]'>
          <motion.ul
            initial={{ visibility: "hidden" }}
            animate={menu ? "open" : "close"}
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.7,
                },
                visibility: "visible",
              },
              close: {
                visibility: "hidden",
                transition: {
                  visibility: {
                    delay: 0.5,
                  },
                },
              },
            }}
            className='relative z-50 flex flex-col items-center justify-center w-full font-semibold text-center mt-36'>
            <motion.li
              initial={initalItems}
              variants={animateMenu}
              className='flex items-center w-full'>
              <Link
                onClick={() => setMenu(false)}
                to='Home'
                href=''
                smooth={true}
                delay={1000}
                className='w-full py-5 transition-colors cursor-pointer hover:text-primary'>
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={initalItems}
              variants={animateMenu}
              className='flex items-center w-full'>
              <Link
                onClick={() => setMenu(false)}
                smooth={true}
                to='AboutUs'
                href=''
                delay={1000}
                className='w-full py-5 transition-colors cursor-pointer hover:text-primary'>
                About Us
              </Link>
            </motion.li>
            <motion.li
              initial={initalItems}
              variants={animateMenu}
              className='flex items-center w-full'>
              <Link
                onClick={() => setMenu(false)}
                to='Services'
                href=''
                smooth={true}
                delay={1000}
                className='w-full py-5 transition-colors cursor-pointer hover:text-primary'>
                Services
              </Link>
            </motion.li>
            <motion.li
              initial={initalItems}
              variants={animateMenu}
              className='flex items-center w-full'>
              <Link
                onClick={() => setMenu(false)}
                to='Skills'
                href=''
                smooth={true}
                delay={1000}
                className='w-full py-5 transition-colors cursor-pointer hover:text-primary'>
                Skills
              </Link>
            </motion.li>
            <motion.li
              initial={initalItems}
              variants={animateMenu}
              className='flex items-center w-full'>
              <Link
                onClick={() => setMenu(false)}
                to='ContactUs'
                href=''
                smooth={true}
                delay={1000}
                className='w-full py-5 transition-colors cursor-pointer hover:text-primary'>
                Contact Us
              </Link>
            </motion.li>
          </motion.ul>
          <motion.div
            animate={menu ? "open" : "close"}
            variants={{
              open: {
                scale: 40,
                transition: {
                  duration: 1,
                },
              },
              close: {
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                },
              },
            }}
            className='absolute top-[43px] right-[24px] xs:right-[43px] z-40 w-[50px] h-[50px] rounded-full bg-black'
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
