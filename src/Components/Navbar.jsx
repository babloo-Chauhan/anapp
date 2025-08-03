import React, { } from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { TiThMenu } from 'react-icons/ti';
import { FaXmark } from 'react-icons/fa6';

const Navbar = React.memo(function Navbar({  toggleLayout , i }) {
    // const [isOpen, setIsOpen] = useState(false);

    // const handleToggleLayout = () => {
    //     setIsOpen(!isOpen);
    //     onLeftClick(); // Call the function passed from Card component to toggle sidebar
      
    // };
    // console.log(toggleLayout(true));
  

    return (
        <div className='fixed left-0 top-0 flex h-16 w-full items-center justify-between bg-white px-4 z-50'>
            {/* Left: Toggle Menu Icon */}

            <div
                className='h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center cursor-pointer'
                onClick={toggleLayout}
            >
                {i ? (
                    <TiThMenu className='text-4xl transition-transform duration-300 transform rotate-0' />
                ) : (
                   
                <FaXmark className='text-3xl transition-transform duration-300 transform rotate-180' />
                )}
            </div>

            {/* Right: User Icon */}
            <div className='h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center'>
                <BiSolidUserCircle className='text-5xl' />
            </div>
        </div>
    );
});

export default Navbar;
