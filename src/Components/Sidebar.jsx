

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { BiSolidUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function SideBar({ show }) {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Service', path: '/service' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
        { name: 'Account', path: '/account' },
        { name: 'Example 6', path: '/example6' },
        { name: 'Example 7', path: '/example7' },
        { name: 'Example 8', path: '/example8' },
        { name: 'Example 9', path: '/example9' },
        { name: 'Example 10', path: '/example10' },
    ];

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.3 }}
                    className='absolute left-0 top-0 h-screen w-full overflow-hidden bg-blue-500 flex-col justify-center items-center'
                >
                    <div className='h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center mt-3 ml-2 cursor-pointer'>
                        <BiSolidUserCircle className='text-5xl' />
                    </div>
                    {/* Links Container */}
                    <div className='m-2 h-[75%] w-4/6 overflow-hidden bg-yellow-500 flex flex-col justify-center items-start transition-all duration-300 ease-in-out translate-x-0'>
                        <div className='grid grid-cols-1 gap-4 p-4 '>
                            {links.map((text, index) => (
                                <motion.a
                                    key={text.name}

                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    className='decoration-none block text-lg font-medium text-black'
                                >
                                    <Link
                                        to={text.path}
                                        className='block text-lg font-medium text-black hover:underline'
                                        // onClick={() => show(false)} // Close sidebar on link click
                                    >
                                        {text.name}
                                    </Link>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    {/* Links Container */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
