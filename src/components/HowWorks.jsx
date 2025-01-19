import React from 'react';

const HowWorks = () => {
return (
<div className="Section2Content w-full h-auto mt-10 flex flex-col justify-center items-center gap-10 ">
        <div className="works1 w-full h-[400px] md:h-auto flex flex-col md:flex-row justify-evenly items-center ">
            <img src='#' className='w-[85%] md:w-[400px] h-[200px] rounded-xl bg-black' alt='woirkimg'/>
            <div className="content1text w-[85%] md:w-[500px] h-auto flex flex-col justify-center items-center gap-8">
                <h1 className="1 text-purple-800 font-sans text-base md:text-2xl w-full">1. Have Your and Your Pet's Credentials</h1>
                <h2 className='1 text-black font-sans text-sm md:text-base'>Having organized credentials ensures seamless communication between pet owners and vets, enabling accurate diagnoses, treatment tracking, and a healthier life for your pets</h2>
            </div>
        </div>

        <div className="works2 w-full h-[400px] md:h-auto flex flex-col md:flex-row justify-evenly items-center ">
            <div className="content1text w-[85%]  md:w-[500px] h-auto md:text-end flex flex-col justify-center items-center gap-8">
                <h1 className="2 text-purple-800 font-sans text-base md:text-2xl w-full">2. Get Your Pets Appointment</h1>
                <h2 className='2 text-black font-sans text-sm md:text-base'>Easily <span className='text-dogblue'>Book Appointments</span> with trusted vets based on your pet’s needs. Schedule checkups, vaccinations, and treatments with just a few clicks!</h2>
            </div>
            <img src='#' className='w-[85%] md:w-[400px] h-[200px] rounded-xl bg-black' alt='workimg'/>
        </div>

        <div className="works3 w-full h-[400px] md:h-auto flex flex-col md:flex-row justify-evenly items-center ">
            <img src='#' className='w-[85%] l md:w-[400px] h-[200px] rounded-xl bg-black' alt='woirkimg'/>
            <div className="content1text w-[85%]  md:w-[500px] h-auto flex flex-col justify-center items-center gap-8">
                <h1 className="3 text-purple-800 font-sans text-base md:text-2xl w-full">3. Have Your and Your Pet's Credentials</h1>
                <h2 className='3 text-black font-sans text-sm md:text-base'>Having organized credentials ensures seamless communication between pet owners and vets, enabling accurate diagnoses, treatment tracking, and a healthier life for your pets</h2>
            </div>
        </div>

</div>)
}

export default HowWorks;
