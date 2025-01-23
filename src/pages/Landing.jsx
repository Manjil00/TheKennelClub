import React from 'react';
import HowWorks from '../components/HowWorks';
import LandingNav from '../components/LandingNav';
import Pricings from '../components/Pricings';

//icons
import { GoChevronDown } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Testimonials from '../components/Testimonials';


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
            <button className='w-[350px] h-[40px] text-white bg-purple-600 mt-5 rounded-xl flex justify-center items-center gap-3'><HiOutlineClipboardDocumentList /> Get Your Pet's Appointment</button>
            </div>
        </div>
        <div className="picture w-[90%] md:w-[48%] h-[250px] md:h-[500px] p-5 md:p-16 flex flex-col justify-center items-start md:gap-10">
          <img src='/images/landingpic.png' className='w-full h-auto' alt='landingpicture'/>
        </div>
      </div>


    <div className="Section2Container  mt-32 md:mt-5  w-full h-auto flex flex-col items-center">
    <div className="greybg bg-slate-200 rounded-xl w-[95%] h-auto py-10">
      <div className="toptittle flex flex-col justify-center items-center">
        <GoChevronDown className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] opacity-60 animate-bounce'/>
        <h1 className="title text-center w-full h-auto text-xl md:text-3xl font-serif font-bold">How Does It Work?</h1>
      </div>
      <HowWorks/>
    </div>
    </div>


<div className="Section3Demos w-full h-auto mt-10 md:mt-5 flex flex-col items-center">
  <div className="greybg bg-slate-200 rounded-xl w-[95%] h-auto py-10">
    <div className="toptittle flex flex-col justify-center items-center">
        <GoChevronDown className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] opacity-60 animate-bounce'/>
        <h1 className="title text-center w-full h-auto text-xl md:text-3xl font-serif font-bold">Demo</h1>
    </div>
    <div className="VideoContent w-full h-auto px-10 flex justify-center items-center mt-5 rounded-xl">
    <iframe className='rounded-xl w-full h-[200px] md:w-[600px] md:h-[350px]' src="https://www.youtube.com/embed/PRAMFqh49b0?si=6rfbpL6MSX4xgAaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
    </div>
  </div>
</div>


<Testimonials/>

<Pricings/>

<NewsLetter/>

</div>
  )
}

export default Landing;
