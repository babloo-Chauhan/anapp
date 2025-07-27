import React from 'react';
import Navbar from '../Components/Navbar';
import Homeapps from '../Components/Homeapps';
import Bottomenu from '../Components/Bottomenu';
export default function Card() {
    return (
        <>
            <div className="relative w-full overflow-hidden translate-x-0 transition-all duration-200" id="main-container">
                {/*Navbar*/}
                <Navbar />
                {/*Navbar*/}


                {/*Homeapps*/}
                <div className="pt-16 pb-16"> {/* Padding to prevent overlap */}
                    <Homeapps />
                </div>
                {/*Home*/}


                {/*Bottom menu Bar*/}
                <Bottomenu />
                {/*Bottom menu Bar*/}

            </div>
        </>
    )
}