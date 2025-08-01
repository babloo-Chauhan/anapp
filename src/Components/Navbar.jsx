import React from 'react';

const Navbar = React.memo(function Navbar({ onLeftClick }) {
    return (
        <>
            <div className='fixed left-0 top-0 flex h-16 w-full items-center justify-between bg-amber-900 px-2'>
                <div className='h-[50px] w-[50px] rounded-full bg-white' onClick={onLeftClick}></div>
                <div className='h-[50px] w-[50px] rounded-full bg-white'></div>
            </div>
        </>
    )
})

export default Navbar;