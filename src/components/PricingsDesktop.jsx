import React from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";


const PricingsDesktop = () => {
return (
<div className="Section4 w-full h-auto flex flex-col items-center mt-32 md:mt-5">
<div className="content py-10 w-full h-auto">
    <h1 className="title text-center w-full h-auto text-xl md:text-3xl font-serif font-bold">Pricings</h1>
    <div className="pricing flex justify-center items-center gap-10 w-full h-[700px] mt-5">
    <div className="FREE  w-[350px] h-auto bg-slate-200 rounded-lg flex flex-col justify-center items-center gap-3 py-10 text-sm md:text-base hover:border-2 hover:border-purple-700">
        <div className="freepic w-[90%] h-[200px] rounded-xl bg-productyellow">
            <h1 className='w-full h-full flex justify-center items-center font-sans font-semibold text-center text-3xl'>$ 0 <br/>Free</h1>
        </div>
    <div className="texts w-[90%]">
        <h1 className=''>Includes access to essential features such as creating and managing your pet's profile, storing basic health records, and browsing nearby vet clinics. Users can also schedule a limited number of appointments and <br/>receive reminders. </h1>
            <h2 className='flex justify-start items-center gap-2 mt-4'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' /> Create and manage your pet's profile with basic health record storage.</h2>
            <h2 className='flex justify-start items-center gap-2 mt-2'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' /> Schedule limited appointments with vaccination and checkup reminders.</h2>
            <h2 className='flex justify-start items-center gap-2 mt-2'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' />Browse nearby vet clinics and access essential tools to keep your pet healthy at no cost.</h2>
    </div>
    <button className='p-3 bg-productyellow rounded-xl font-bold w-[100px] h-[50px]'>Buy</button>

    </div>

    <div className="BASIC  w-[350px] h-auto bg-slate-200 rounded-lg flex flex-col justify-center items-center gap-3 py-10 text-sm md:text-base hover:border-2 hover:border-purple-700">
        <div className="freepic w-[90%] h-[200px] rounded-xl bg-productbrown">
            <h1 className='w-full h-full flex justify-center items-center font-sans font-semibold text-center text-3xl'>$ 10 <br/>per Month</h1>
        </div>
    <div className="texts w-[90%]">
        <h1 className=''>Includes access to essential features such as creating and managing your pet's profile, storing basic health records, and browsing nearby vet clinics. Users can also schedule a limited number of appointments and <br/>receive reminders. </h1>
            <h2 className='flex justify-start items-center gap-2 mt-4'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' /> Create and manage your pet's profile with basic health record storage.</h2>
            <h2 className='flex justify-start items-center gap-2 mt-2'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' /> Schedule limited appointments with vaccination and checkup reminders.</h2>
            <h2 className='flex justify-start items-center gap-2 mt-2'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' />Browse nearby vet clinics and access essential tools to keep your pet healthy at no cost.</h2>
    </div>
    <button className='p-3 bg-productbrown rounded-xl font-bold w-[100px] h-[50px]'>Buy</button>
    </div>

    <div className="Premium  w-[350px] h-auto bg-slate-200 rounded-lg flex flex-col justify-center items-center gap-3 py-10 text-sm md:text-base hover:border-2 hover:border-purple-700">
        <div className="freepic w-[90%] h-[200px] rounded-xl bg-productgreen">
            <h1 className='w-full h-full flex justify-center items-center font-sans font-semibold text-center text-3xl'>$ 100 <br/>per Anum</h1>
        </div>
    <div className="texts w-[90%]">
        <h1 className=''>Includes access to essential features such as creating and managing your pet's profile, storing basic health records, and browsing nearby vet clinics. Users can also schedule a limited number of appointments and<br/>receive reminders. </h1>
            <h2 className='flex justify-start items-center gap-2 mt-4'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' /> Create and manage your pet's profile with basic health record storage.</h2>
            <h2 className='flex justify-start items-center gap-2 mt-2'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' /> Schedule limited appointments with vaccination and checkup reminders.</h2>
            <h2 className='flex justify-start items-center gap-2 mt-2'><IoCheckmarkDoneCircle className='text-green-700 w-[30px] h-[30px]' />Browse nearby vet clinics and access essential tools to keep your pet healthy at no cost.</h2>
    </div>
    <button className='p-3 bg-productgreen rounded-xl font-bold w-[100px] h-[50px]'>Buy</button>
    </div>

</div>
</div>
</div>
)
}

export default PricingsDesktop;
