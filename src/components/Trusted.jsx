import React from 'react'

const Trusted = () => {
return (
<div className="flexing#1 flex flex-col md:flex-row justify-center items-center mt-10">
    <div className=' bg-slate-200 p-5 rounded-xl w-[95%] h-auto flex flex-col md:flex-row justify-center items-center gap-5'>

    <div className="flex1 w-full md:w-[50%]">
    <h1 className="ttile font-sans font-bold text-xl md:text-3xl text-center">Trusted all over <span className='p-2 bg-red-600 rounded-xl text-white'>Nepal </span></h1>
    <h2 className="trusted mt-5 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dignissimos. Excepturi tempore voluptatibus voluptatem quia fuga reprehenderit quam quidem maiores quod magni autem doloribus labore eligendi ducimus provident, deleniti illo. The Kennel Club is highly rated and loved platform for our clients and users with exceptional reliability, performance and User friendly features.</h2>
    
    <div className="img flex justify-evenly items-center p-5 ">
    <img src='/icons/loading.png' className='w-[60px] h-[60px]' alt='emoji1'/>
    <img src='/images/afterCompletingAppointment.png' className='w-[60px] h-[60px]' alt='emoji2'/>
    <img src='/icons/loading.png' className='w-[60px] h-[60px]' alt='emoji3'/>
    <img src='/images/afterCompletingAppointment.png' className='w-[60px] h-[60px]' alt='emoji4'/>
    </div>
    </div>

    <div className="emopjis grid grid-cols-2 justify-center items-center gap-10 p-5">
        <div className="one" id="1">
        <h1 className='text-4xl md:text-6xl font-sans'>#1</h1>
        <h2 className='font-sans'>Product of the weeek adn month and year</h2>
        </div>

        <div className="one" id="2">
        <h1 className='text-4xl md:text-6xl'>4.5 / 5</h1>
        <h2 className='font-sans'>Product of the weeek adn month and year</h2>
        </div>

        <div className="one" id="3">
        <img src='/icons/trophy.png' className='w-[60px] h-[60px]' alt='tropphy'/>
        <h2 className='font-sans'>Product of the weeek adn month and year</h2>
        </div>

        <div className="one" id="4">
        <img src='/icons/handshake.png' className='w-[60px] h-[60px]' alt='handsshakingemoji'/>
        <h2 className='font-sans'>Product of the weeek adn month and year</h2>
        </div>
    </div>

    </div>
</div>
)
}

export default Trusted
