import React from 'react'

const PricingsMobile = () => {
return (
    <div className='main w-full h-auto bg-green-700 mt-10 p-5'>
        <div className="section w-full h-[500px] bg-slate-200 rounded-xl p-3">
            <div className="MPricing1 flex justify-between items-center ">
                <div className="left">
                    <h1 className="text-3xl font-bold text-white">Basic</h1>
                    <p className="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <h1 className="text-3xl font-bold text-white">$ 99.99</h1>

            </div>
        </div>
    </div>
)
}

export default PricingsMobile;
