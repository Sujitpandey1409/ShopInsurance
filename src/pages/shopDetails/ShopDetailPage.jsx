import React from "react";
import "./ShopDetailPage.css";
import VehicleDetailsLeft from "./ShopDetailsLeft";
import ShopDetailsRight from "./ShopDetailsRight";

const ShopDetailPage = () => {
  return (
    <div className="shop-details-wrapper">
      <div className="d-flex gap-2 shop-details-container">
        <VehicleDetailsLeft />
        <ShopDetailsRight />
      </div>
    </div>
  );
};

export default ShopDetailPage;
