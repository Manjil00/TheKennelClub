import React from 'react';
import LandingNav from '../components/LandingNav';
import HowWorks from '../components/HowWorks';

//icons
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";

const Landing = () => {

  // const offset = 200;
  // const duration = 600;
  // useEffect(()=>{
  //     Aos.init({offset:50,duration:200});
  // },[offset,
  //     duration])

  return (
    <div className='w-full h-[100vh]'>
      <LandingNav/>

      <div className="SectionContainer w-full h-[500px] flex flex-col md:flex-row justify-center items-center mt-24 md:mt-0">
        <div className="leftSection w-[90%] md:w-[48%] h-auto md:h-[500px] p-5 md:p-16 flex flex-col justify-center items-start gap-5">
            <h1 className="title text-black text-3xl md:text-4xl font-bold font-serif">Connecting Vet Doctors and Pet Owners for <span className='text-dogblue'>Healthier</span>, <span className='text-productbrown'>Happier</span> Pets.</h1>
            <div className="h2 text-black text-xs md:text-xl mt-5">
            <p className='text-sm'><span className='text-purple-800'>The Kennel Club</span>, Nepal’s premier platform designed to bridge the gap between pet owners and veterinary professionals. From managing your furry friend’s health records to booking vet appointments and accessing trusted advice. Join us in creating a community where dogs receive the love and care they deserve, and their humans enjoy peace of mind!</p>
            <button className='w-[350px] h-[40px] bg-purple-700 mt-5 rounded-xl flex justify-center items-center gap-3'><HiOutlineClipboardDocumentList /> Get Your Pet's Appointment</button>
            </div>
        </div>
        <div className="picture w-[90%] md:w-[48%] h-[250px] md:h-[500px] p-5 md:p-16 flex flex-col justify-center items-start md:gap-10">
          <img src='/images/landingpic.png' className='w-full h-auto' alt='landingpicture'/>
        </div>
      </div>

    <div className="Section2Container  mt-32 md:mt-5  w-full h-auto ">
      <div className="toptittle flex flex-col justify-center items-center">
        <GoChevronDown className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] opacity-60 animate-bounce'/>
        <h1 className="title text-center w-full h-auto text-xl md:text-3xl font-serif font-bold">How Does It Work?</h1>
      </div>
      <HowWorks/>
    </div>


    </div>
  )
}

export default Landing;
