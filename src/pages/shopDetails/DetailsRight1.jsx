import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import headerIcon from "../../assets/IconDetail.svg";
import ownshipIcon from "../../assets/ownersipIcon.svg";
import ownshipIconT from "../../assets/ownershipIconT.svg";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

// fetched from backend or else pincode may be just input box
const pinCodOptions = [
  { value: 400011, label: "400011" },
  { value: 400012, label: "400012" },
  { value: 400013, label: "400013" },
];
const businessOptions = [
  { value: "BusinessType1", label: "BusinessType1" },
  { value: "BusinessType2", label: "BusinessType2" },
  { value: "BusinessType3", label: "BusinessType3" },
];

const DetailsRight1 = ({setStep}) => {
  const [selectedPin, setSelectedPin] = useState();
  const [detailErrors, setDetailErrors] = useState({});
  const [selectedBusiness, setSelectedBusiness] = useState();
  const [isOwned, setisOwned] = useState(false);
  const [isTenant, setisTenant] = useState(false);

  const navigate = useNavigate()
  const handleClickOwnership = (opt) => {
    opt === "owned"
      ? setisOwned((prev) => !prev)
      : setisTenant((prev) => !prev);
  };

  // validations
  const validateDetails = () => {
    const errors = {};

    // Business Type Validation
    if (!selectedBusiness) {
      errors.selectedBusiness = "Business Type is required";
    }
    // Pincode validation (6 digits)
    const pincodePattern = /^\d{6}$/;
    if (!selectedPin) {
      errors.selectedPin = "Pin code is required";
    } else if (!pincodePattern.test(selectedPin.value)) {
      errors.selectedPin = "Invalid pin code";
    }

    return errors;
  };
  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    console.log(selectedPin);
    const errors = validateDetails();
    
    if (Object.keys(errors).length === 0) {
        setStep(false);
    }
    else{
        console.log(errors, detailErrors);
        setDetailErrors(errors)
    }
  };

  return (
    <div className="shop-details-right-sec">
      <div className="d-flex gap-2">
        <div className="detail-header-icon-container">
          <img src={headerIcon} alt="icon" />
        </div>
        <div className="d-flex flex-column">
          <div className="detail-header-title">
            Get <span>₹50</span> Lakh Cover starting at <span>₹3500</span>
          </div>
          <div className="detail-header-title-details">
            Your answers help us find the best plans for you!
          </div>
        </div>
      </div>
      <hr />
      <Row>
        <Col md={6}>
          <div className="d-flex flex-column gap-1 text-start w-100">
            <label className="label-text">
              Risk Location Pincode<span>*</span>
            </label>
            <Select
              placeholder="Select Pincode"
              options={pinCodOptions}
              value={selectedPin}
              onChange={setSelectedPin}
            />
          </div>
          {detailErrors.selectedPin && <small className="text-danger">{detailErrors.selectedPin}</small>}
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column gap-1 text-start w-100 mt-responive">
            <label className="label-text">
              Type of Business<span>*</span>
            </label>
            <Select
              placeholder="Parternership"
              options={businessOptions}
              value={selectedBusiness}
              onChange={setSelectedBusiness}
            />
          </div>
          {detailErrors.selectedBusiness && <small className="text-danger">{detailErrors.selectedBusiness}</small>}
        </Col>
      </Row>
      <div className="d-flex flex-column gap-2 mt-3">
        <div className="label-text">
          Ownership Type?<span>*</span>
        </div>
        <div className="d-flex gap-3">
          <div
            onClick={() => handleClickOwnership("owned")}
            name="Owned"
            className={`ownership-box ${isOwned && "ownership-box-active"}`}
          >
            <div className="cicrcular-icon">
              <img src={ownshipIcon} alt="icon" />
            </div>
            <p>Owned</p>
          </div>
          <div
            onClick={() => handleClickOwnership("tenant")}
            className={`ownership-box ${isTenant && "ownership-box-active"}`}
          >
            <div className="cicrcular-icon">
              <img src={ownshipIconT} alt="icon" />
            </div>
            <p>Tenant</p>
          </div>
        </div>
      </div>
      <div onClick={handleSubmitDetails} className="proceed-button mt-5 mb-2">
        Proceed
      </div>
    </div>
  );
};

export default DetailsRight1;
