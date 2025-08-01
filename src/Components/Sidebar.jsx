import React from 'react';

export default function SideBar() {
    return (
        <>
            <div className='absolute left-0 top-0 h-screen w-full bg-blue-500 mx-auto flex justify-start items-center'>
                {/*Links Container*/}
                <div className='m-2 h-[90%] w-4/6 overflow-hidden bg-yellow-500 trnsition-all duration-300 ease-in-out translate-x-0'>
                    <div className='grid grid-cols-1 grid-rows-1 gap-4 p-4'>
                        <a href='/' className='decoration-none'>Example 1</a>
                        <a href='/' className='decoration-none'>Example 2</a>
                        <a href='/' className='decoration-none'>Example 3</a>
                        <a href='/' className='decoration-none'>Example 4</a>
                        <a href='/' className='decoration-none'>Example 5</a>
                        <a href='/' className='decoration-none'>Example 6</a>
                        <a href='/' className='decoration-none'>Example 7</a>
                        <a href='/' className='decoration-none'>Example 8</a>
                        <a href='/' className='decoration-none'>Example 9</a>
                        <a href='/' className='decoration-none'>Example 10</a>
                    </div>
                </div>
                {/*Links Container*/}
            </div>
        </>
    )
}