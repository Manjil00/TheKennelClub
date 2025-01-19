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
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-center md:items-center text-sm md:text-base ml-1">
        <Link to="/"><li className="text-black">How it works</li></Link>
        <Link to="/"><li className="text-black">Demo</li></Link>
        <Link to="/"><li className="text-black">Testimonials</li></Link>
        <Link to="/"><li className="text-black">Price</li></Link>
        <Link to="/"><li className="text-black">FAQ</li></Link>

        <Link to="/login"><li className="w-[100px] border-2 border-purple-800 py-1 px-3 rounded-lg hover:text-white hover:bg-purple-800 text-center">Login</li></Link>
        <Link to="/register"><li className="w-[100px] border-2 border-purple-800 py-1 px-3 rounded-lg hover:text-white hover:bg-purple-800 text-center">Register</li></Link>
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