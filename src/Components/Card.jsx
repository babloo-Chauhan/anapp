import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Bottomenu from '../Components/Bottomenu';
import SideBar from './Sidebar';
import '../index.css'; // Assuming you have a global CSS file for styles'
import BrowserRouters from '../BrowserRouters';

export default function Card() {

    const [slideRight, setSlideRight] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const HandleSlideRight = () =>{ setSlideRight(prev => !prev);
        setIsOpen(!isOpen);
    } //Toggle left/right slide

   

    // const handleToggleLayout = () => {
    //   // Toggle the state for the sidebar
    //     HandleSlideRight(); // Call the function passed from Card component to toggle sidebar

    // };

    useEffect(() => {
        if (!slideRight) return;

        let touchstartX = 0;
        let touchendX = 0;

        const handleTouchStart = (e) => {
            touchstartX = e.touches[0].clientX;
        };

        const handleTouchMove = (e) => {
            touchendX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            if (touchstartX - touchendX > 50) {
                HandleSlideRight();
            }
        };

        const container = document.getElementById('main-container');
        if (!container) return;

        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [slideRight]);


    return (
        <>
            <SideBar show={HandleSlideRight}  />

            {/*Whole Container card  without sidebar*/}
            <div className={`fixed h-dvh w-full overflow-y-auto ${slideRight ? 'slide-right' : 'slide-left'} transition-all duration-300 ease-in-out`} id="main-container">

                {/*Navbar*/}
                <Navbar  toggleLayout={HandleSlideRight}  i={isOpen} />
                {/*Navbar*/}


                {/*all pages router*/}
                <div className="py-16 h-full overflow-y-auto"> {/* Padding to prevent overlap */}
                    <BrowserRouters />
                </div>
                {/*all pages router*/}


                {/*Bottom menu Bar*/}
                <Bottomenu  />
                {/*Bottom menu Bar*/}

            </div>
            {/*Whole Container*/}

        </>
    )
}