import React from 'react'

const Testimonials = () => {
return (
<div className="Section4 w-full h-auto mt-10 md:mt-5 flex flex-col items-center font-serif">
<div className="greybg bg-slate-200 rounded-xl w-[95%] h-auto py-10">
        <h1 className="title text-center w-full h-auto text-xl md:text-3xl font-serif font-bold">Testimonials</h1>
        <div className="Testimonials w-full h-auto p-10 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 ">
        <img src='/images/Testimonial1.png' className=' w-[95%] h-[200px] md:w-[450px] md:h-[270px] py-2 rounded-xl cursor-pointer' alt='img1'/>
        <img src='/images/Testimonial2.png' className=' w-[95%] h-[200px] md:w-[450px] md:h-[270px] py-2 rounded-xl cursor-pointer' alt='img2'/>
        <img src='/images/Testimonial3.png' className=' w-[95%] h-[200px] md:w-[450px] md:h-[270px] py-2 rounded-xl cursor-pointer' alt='img3'/>
        </div>
</div>
</div>
)
}

export default Testimonials
