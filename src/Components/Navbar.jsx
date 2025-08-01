import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';

const Navbar = React.memo(function Navbar({ onLeftClick }) {
    return (
        <>
            <div className='fixed left-0 top-0 flex h-16 w-full items-center justify-between bg-amber-900 px-2 z-50'>
                <div className='h-[50px] w-[50px] rounded-full bg-white' onClick={onLeftClick}>
                    <img src={BiSolidUserCircle} alt="User Icon" className='h-full w-full object-cover rounded-full' />
                </div>
                <div className='h-[50px] w-[50px] rounded-full bg-white'></div>
            </div>
        </>
    )
})

export default Navbar;