import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import { Link } from 'react-router-dom';


const LandingNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between items-center px-6 py-1 z-50 relative ">
    <div className="flex justify-center items-center">
        <img className="w-10 h-10 mr-3" src="/src/assets/logo.png" alt="Logo" />
        <h1 className='text-black ml-6  text-sm md:text-2xl
cursor-pointer flex justify-center items-center'>The Kennel Club</h1>
    </div>
    
    <div className={`bg-white md:bg-transparent absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col justify-end md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl">
        <Link to="/login"><li className="border-2 border-purple-800 p-1 rounded-lg hover:text-white hover:bg-purple-800">Login</li></Link>
        <Link to="/register"><li className="border-2 border-purple-800 p-1 rounded-lg hover:text-white hover:bg-purple-800">Register</li></Link>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default LandingNav;