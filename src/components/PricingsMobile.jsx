import React from 'react'

const PricingsMobile = () => {
return (
    <div className='main w-full h-auto mt-10 flex justify-center items-center text-black`'>
        <div className="section w-[95%] h-auto bg-slate-200 rounded-xl p-5 flex flex-col justify-between items-center gap-5">

            <h1 className="privingplans  text-xl font-bold">Pricing Plans</h1>


            <div className="MPricing1 flex justify-between items-center ">
                <div className="left w-[80%]">
                    <h1 className="text-xl font-bold ">Basic</h1>
                    <p className="text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            <div className="price w-[100px] h-[60px] bg-productyellow rounded-xl flex justify-center items-center">
                <h1 className="text-2xl font-bold ">$99.99</h1>
            </div>
            </div>

            <div className="MPricing2 flex justify-between items-center">
                <div className="left w-[80%]">
                    <h1 className="text-xl font-bold ">Basic</h1>
                    <p className="text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            <div className="price w-[100px] h-[60px] bg-productyellow rounded-xl flex justify-center items-center">
                <h1 className="text-2xl font-bold">$99.99</h1>
            </div>
            </div>

            <div className="MPricing3 flex justify-between items-center">
                <div className="left w-[80%]">
                    <h1 className="text-xl font-bold ">Basic</h1>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            <div className="price w-[100px] h-[60px] bg-productyellow rounded-xl flex justify-center items-center">
                <h1 className="text-2xl font-bold ">$99.99</h1>
            </div>
            </div>
        </div>
    </div>
)
}

export default PricingsMobile;
