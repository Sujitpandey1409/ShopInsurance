import React, { useState } from "react";
import "./ShopDetailsRight.css";
import DetailsRight1 from "./DetailsRight1";
import DetailsRight2 from "./DetailsRight2";
import DetailsRight3 from "./DetailsRight3";



const ShopDetailsRight = () => {
  const [isStepNo, setStep] = useState('1')
  return (
    <div className="shop-details-right-sec-container">
      {isStepNo==='1'&&<DetailsRight1 setStep={setStep}/>}
      {isStepNo==='2'&&<DetailsRight2 setStep={setStep}/>}
      {isStepNo==='3'&&<DetailsRight3/>}
    </div>
  );
};

export default ShopDetailsRight;
