import React from 'react'
import LandingNav from '../components/LandingNav';

const Login = () => {
  return (
    <div className='mainContainer w-full h-auto'>
      <LandingNav/>

  <div className="InnerContainer w-full h-auto md:px-20 py-4 flex flex-col md:flex-row justify-evenly items-center md:gap-10">
    <div className="leftSection w-[90%] md:w-[50%] h-auto md:h-[500px] rounded-xl p-5 md:p-16 flex flex-col justify-center items-start gap-5 md:gap-10">
      <h1 className="title text-black text-sm md:text-4xl font-bold font-serif">Join The Kennel Club: Connecting Vet Doctors and Dog Lovers Across Nepal</h1>
      <div className="h2 text-black text-xs md:text-xl">
      <h2>Seamless care for your furry friends 🐾</h2>
      <h2 className='mt-4'>Built for Vet Doctors and Dog Owners</h2>
      <h2 className='mt-4'>30-day free trial for premium features</h2>
      </div>

    </div>

  <div className="rightSection w-[90%] md:w-[50%] h-[400px] md:h-[500px] bg-teal-800 rounded-xl">

  </div>
</div>

    </div>
  )
}

export default Login;
