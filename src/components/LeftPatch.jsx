import React from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const LeftPatch = () => {
return (
<div className="leftSection w-[90%] md:w-[48%] h-auto md:h-[500px] p-5 md:p-16 flex flex-col justify-center items-start gap-5 md:gap-10">
    <h1 className="title text-black text-sm md:text-4xl font-bold font-serif">Join The Kennel Club: Connecting Vet Doctors and Dog Lovers Across Nepal</h1>
    <div className="h2 text-black text-xs md:text-xl mt-5">
    <h2 className='flex justify-start items-center gap-5'><IoCheckmarkDoneCircle className='text-green-700' /> Seamless care for your furry friends 🐾</h2>
    <h2 className='mt-4 flex justify-start items-center gap-5'><IoCheckmarkDoneCircle className='text-green-700'/>Built for Vet Doctors and Dog Owners</h2>
    <h2 className='mt-4 flex justify-start items-center gap-5'><IoCheckmarkDoneCircle className='text-green-700'/>30-day free trial for premium features</h2>
    </div>
</div>
)
}

export default LeftPatch;
