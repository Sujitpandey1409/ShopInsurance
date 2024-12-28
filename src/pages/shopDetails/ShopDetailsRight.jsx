import React, { useState } from "react";
import "./ShopDetailsRight.css";
import DetailsRight1 from "./DetailsRight1";
import DetailsRight2 from "./DetailsRight2";



const ShopDetailsRight = () => {
  const [isStep1, setStep] = useState(true)
  return (
    <div className="shop-details-right-sec-container">
      {isStep1&&<DetailsRight1 setStep={setStep}/>}
      {!isStep1&&<DetailsRight2 setStep={setStep}/>}
    </div>
  );
};

export default ShopDetailsRight;
