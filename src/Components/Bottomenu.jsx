import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Bottomenu() {
    const iconClass = 'h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center';

    return (
        <div className='fixed bottom-0 left-0 flex h-16 w-full items-center justify-around bg-amber-900 px-4 z-50'>

            <Link to="/" className={iconClass}>
                <FaHome className='text-3xl' />
            </Link>

            <Link to="/about" className={iconClass}>
                <FcAbout className='text-3xl' />
            </Link>

            <Link to="/contact" className={iconClass}>
                <MdContactPage className='text-3xl' />
            </Link>

            <Link to="/account" className={iconClass}>
                <BiSolidUserCircle className='text-3xl' />
            </Link>

        </div>
    );
}
