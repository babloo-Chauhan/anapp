import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Bottomenu from '../Components/Bottomenu';
import SideBar from '../Components/Sidebar';
import Homeapps from '../Components/Homeapps'; // Import Homeapps component directly for simplicity
import '../index.css'; // Assuming you have a global CSS file for styles'

export default function Card() {

    const [slideRight, setSlideRight] = useState(false);

    const HandleSlideRight = () => setSlideRight(prev => !prev); //Toggle left/right slide

    return (
        <>
            {/*Whole Container*/}
            <div className={`relative w-full overflow-hidden ${slideRight ? 'slide-right' : 'slide-left'} transition-all duration-300 ease-in-out`} id="main-container">

                {/*Navbar*/}
                <Navbar onLeftClick={HandleSlideRight} />
                {/*Navbar*/}


                {/*Homeapps*/}
                <div className="pt-16 pb-16"> {/* Padding to prevent overlap */}
                    <Homeapps />
                </div>
                {/*Home*/}


                {/*Bottom menu Bar*/}
                <Bottomenu />
                {/*Bottom menu Bar*/}

                {/*SideBarMenus*/}
                <SideBar />
                {/*SideBarMenus*/}

            </div>
            {/*Whole Container*/}
        </>
    )
}