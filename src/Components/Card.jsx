import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Bottomenu from '../Components/Bottomenu';
import SideBar from './Sidebar';
import '../index.css'; // Assuming you have a global CSS file for styles'
import BrowserRouters from '../BrowserRouters';

export default function Card() {

    const [slideRight, setSlideRight] = useState(false);

    const HandleSlideRight = () =>{ setSlideRight(prev => !prev);
        setIsOpen(!isOpen);
    } //Toggle left/right slide

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleLayout = () => {
        setIsOpen(!isOpen);
        HandleSlideRight(); // Call the function passed from Card component to toggle sidebar

    };

    useEffect(() => {
        let touchstartX = 0;
        let touchendX = 0;
     

        const handleTouchStartX = (e) => {
            touchstartX = e.touches[0].clientX; // Get the initial touch position
            
        }
        const handleTouchMove = (e) => {
            touchendX = e.touches[0].clientX; // Get the initial touch position
            
        }
        const handleTouchEnd = () => {
            if (touchstartX - touchendX > 50) {
                setSlideRight(false); // Swipe left to show sidebar
                
            }
        }

        const container = document.getElementById('main-container');

        container.addEventListener('touchstart', handleTouchStartX);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStartX);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        }


    }, [])


    return (
        <>
            <SideBar show={HandleSlideRight}  />

            {/*Whole Container card  without sidebar*/}
            <div className={`relative h-screen w-full overflow-hidden ${slideRight ? 'slide-right' : 'slide-left'} transition-all duration-300 ease-in-out`} id="main-container">

                {/*Navbar*/}
                <Navbar  toggleLayout={handleToggleLayout}  i={isOpen} />
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