import React from 'react';
import HowWorks from '../components/HowWorks';
import LandingNav from '../components/LandingNav';
import Pricings from '../components/Pricings';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

//icons
import { GoChevronDown } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";



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

<div className="flexing flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
    <div className="flex1 w-[50%] h-auto bg-red-600">
      <h1 className="ttile font-sans font-semibold text-xl md:text-4xl">Trusted all over Nepal</h1>
      <h2 className="trusted mt-5 text-base">The Kennel Club is highly rated and loved platform for our clients and users with exceptional reliability, performance and User friendly features.</h2>
    </div>
</div>



<div className="map-container w-full py-5 h-auto flex justify-center items-center mt-44 md:mt-2 gap-3 md:gap-10">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.277768285356!2d85.28493274196482!3d27.709030242226834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1737314166916!5m2!1sen!2snp" className='w-[95%] h-[200px] md:h-[450px] rounded-md' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


</div>
  )
}

export default Landing;
