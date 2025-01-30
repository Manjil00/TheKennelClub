import React from 'react';
import PricingsDesktop from './PricingsDesktop';
import PricingsMobile from './PricingsMobile';


const Pricings = () => {
return (
<>
<div className="pricingDesktop hidden md:block">
    <PricingsDesktop/>
</div>


<div className="pricingmobile block md:hidden">
    <PricingsMobile/>
</div>
</>
)
}

export default Pricings;
