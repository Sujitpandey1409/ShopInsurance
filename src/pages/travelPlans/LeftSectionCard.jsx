// LeftSectionCard.js
import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FiEdit3 } from "react-icons/fi";
import EditPolicyDetailPopUp from "./EditPolicyDetailPopUp";
import { FaChevronDown, FaTreeCity } from "react-icons/fa6";
import { DetailContext } from "../../contexts/DetailPageProvider";

const LeftSectionCard = ({
  classNameRightSec,
  isFetchedForResponsive,
  setIsFetchedForResponsive,
}) => {
  const [fuelType, setFuelType] = useState("");
  const [isEditPolicyDetailPopUp, setEditPolicyPopUp] = useState(false);
  const [existingPolicyDate, setExistingPolicyDate] = useState("");
  const [previousNCB, setPreviousNCB] = useState("");
  const { detailPageData } = useContext(DetailContext);
  const {
    riskLocationPinCode,
    typeOfBusiness,
    buildingSumInsured,
    stockSumInsured,
    contentSumInsured,
  } = detailPageData;

  const currentDate = new Date().toISOString().split('T')[0]

  // const { variant } = vehicleDetails;
  return (
    <>
      {isEditPolicyDetailPopUp && (
        <EditPolicyDetailPopUp
          isOpen={isEditPolicyDetailPopUp}
          fuelType={fuelType}
          setFuelType={setFuelType}
          existingPolicyDate={existingPolicyDate}
          previousNCB={previousNCB}
          setPreviousNCB={setPreviousNCB}
          setExistingPolicyDate={setExistingPolicyDate}
          handleClose={() => setEditPolicyPopUp(() => false)}
        />
      )}
      <Card className={`custom-card ${classNameRightSec}`}>
        {/* Header Section */}
        <CardBody style={{ padding: "20px", position: "relative" }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <div className="custom-card-title-icon">
                <FaTreeCity size={29} />
              </div>
              <div className="d-flex flex-column">
                <h6 style={{ fontSize: "16px", fontWeight: "700" }}>
                  {"Owned"}
                </h6>
                {/* <p className='title-text'>{selectedCountries.length?`+ ${selectedCountries.length-1} More`:'0 country selected'}</p> */}
                <p className="title-text">{"+ 3 More"}</p>
              </div>
            </div>
            <div onClick={() => setEditPolicyPopUp(true)} className="edit-icon">
              <FiEdit3 />
            </div>
          </div>
          <hr className="left-card-seperator" />
        </CardBody>
        {/* Body Section */}
        {!isFetchedForResponsive && (
          <div style={{
            padding: "20px",
            position: "relative",
            marginTop: "-45px",
          }}>
            <h5 style={{color:'#3c4473cc', fontSize:'12px'}}>Business Type</h5>
            <p>{typeOfBusiness || "-"}</p>
          </div>
        )}
        {!isFetchedForResponsive ? (
          <>
            <CardBody
              className="d-flex justify-content-center"
              style={{
                padding: "20px",
                position: "relative",
                marginTop: "-45px",
              }}
            >
              <div className="left-card-detail-container">
                <div className="column-text">
                  <div className="column-text-title-info">
                    <h5>Building value</h5>
                    <p>{buildingSumInsured || "-"}</p>
                    <h5>Total stock value</h5>
                    <p>{stockSumInsured || "-"}</p>
                    <h5>Policy Tenure</h5>
                    <p>{"1 Year"}</p>
                  </div>
                </div>
                <div className="column-text">
                  <div className="column-text-title-info">
                    <h5>Total Content Value</h5>
                    <p>{contentSumInsured || "-"}</p>
                    <h5>Location</h5>
                    <p>{riskLocationPinCode || "-"}</p>
                    <h5>Policy Start Date</h5>
                    <p>{currentDate}</p>
                  </div>
                </div>
              </div>
            </CardBody>

            {/* Footer Section */}
            {/* <div className='triangle-warning-icon'>
                        <FaExclamationTriangle style={{ color: '#E01A1A', marginRight: '10px' }} />
                        <span style={{ color: '#E01A1A', fontWeight: 'bold' }}>Inspection Required</span>
                    </div> */}
          </>
        ) : (
          <p
            className="right-show-more d-flex gap-2"
            onClick={() => setIsFetchedForResponsive(false)}
          >
            Show More <FaChevronDown />
          </p>
        )}
      </Card>
    </>
  );
};

export default LeftSectionCard;
