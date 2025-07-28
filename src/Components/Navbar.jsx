import React from 'react';

export default function Navbar({onLeftClick }) {
    return (
        <>
            <div className='h-16 w-full bg-amber-900 flex justify-between items-center px-2 fixed top-0 left-0'>
                <div className='h-[50px] w-[50px] bg-white rounded-full' onClick={onLeftClick }></div>
                <div className='h-[50px] w-[50px] bg-white rounded-full'></div>
            </div>
        </>
    )
}