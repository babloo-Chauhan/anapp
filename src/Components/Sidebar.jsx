//import React from 'react';

//export default function SideBar() {
//    return (
//        <>
//            <div className='absolute left-0 top-0 h-screen w-full bg-blue-500 mx-auto flex justify-start items-center'>
//                {/*Links Container*/}
//                <div className='m-2 h-[90%] w-4/6 overflow-hidden bg-yellow-500 trnsition-all duration-300 ease-in-out translate-x-0'>
//                    <div className='grid grid-cols-1 grid-rows-1 gap-4 p-4'>
//                        <a href='/' className='decoration-none'>Example 1</a>
//                        <a href='/' className='decoration-none'>Example 2</a>
//                        <a href='/' className='decoration-none'>Example 3</a>
//                        <a href='/' className='decoration-none'>Example 4</a>
//                        <a href='/' className='decoration-none'>Example 5</a>
//                        <a href='/' className='decoration-none'>Example 6</a>
//                        <a href='/' className='decoration-none'>Example 7</a>
//                        <a href='/' className='decoration-none'>Example 8</a>
//                        <a href='/' className='decoration-none'>Example 9</a>
//                        <a href='/' className='decoration-none'>Example 10</a>
//                    </div>
//                </div>
//                {/*Links Container*/}
//            </div>
//        </>
//    )
//}

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function SideBar({ show }) {
    const links = [
        'Example 1', 'Example 2', 'Example 3', 'Example 4', 'Example 5',
        'Example 6', 'Example 7', 'Example 8', 'Example 9', 'Example 10'
    ];

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration:0.3 }}
                    className='absolute left-0 top-0 h-screen w-full overflow-hidden bg-blue-500 flex justify-start items-center'
                >
                    {/* Links Container */}
                    <div className='m-2 h-[75%] w-4/6 overflow-hidden bg-yellow-500'>
                        <div className='grid grid-cols-1 gap-4 p-4'>
                            {links.map((text, index) => (
                                <motion.a
                                    href='/'
                                    key={text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    className='decoration-none block text-lg font-medium text-black'
                                >
                                    {text}
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
