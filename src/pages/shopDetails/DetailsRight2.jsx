import React, { useState } from "react";
import { Col, Input, Row } from "reactstrap";
import headerIcon from "../../assets/IconDetail.svg";
import ownshipIcon from "../../assets/ownersipIcon.svg";
import ownshipIconT from "../../assets/ownershipIconT.svg";
import Select from "react-select";
import "./DetailsRight2.css";
import icon1 from "../../assets/icon1DetailRight.svg";
import icon2 from "../../assets/icon2DetailRight.svg";
import icon3 from "../../assets/icon3DetailRight.svg";
import iconChecked from "../../assets/IconChecked.svg";
import iconUnchecked from "../../assets/IconUnchecked.svg";

// fetched from backend or else pincode may be just input box
const pinCodOptions = [
  { value: "400011", label: "400011" },
  { value: "400012", label: "400012" },
  { value: "400013", label: "400013" },
];
const businessOptions = [
  { value: "BusinessType1", label: "BusinessType1" },
  { value: "BusinessType2", label: "BusinessType2" },
  { value: "BusinessType3", label: "BusinessType3" },
];

const DetailsRight2 = () => {
  const [selectedBox, setSelectedBox] = useState("1");
  const [value, setValue] = useState("");

  //   formatCurrency handler to format rs input
  const formatCurrency = (inputValue) => {
    let formattedValue = inputValue.replace(/[^\d.]/g, "");
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (formattedValue) {
      formattedValue = "₹ " + formattedValue;
    }

    return formattedValue;
  };
  const handleChange = (event) => {
    const rawValue = event.target.value;
    setValue(formatCurrency(rawValue)); // Update the state with the formatted value
  };

//   logic to handle click on boxes(boxes switch)
  const handleClickBoxes = (boxNo)=>{
    setSelectedBox((prev)=>{
        if(prev!==boxNo){
            setValue('')
            return boxNo;
        }
        else return prev
    })
  }

  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    console.log("");
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
      <div className="step-tab-container">Step 1/2</div>
      <div className="d-flex flex-column mt-2 gap-4">
        {/* ****First Box**** */}

        <div
          onClick={() => handleClickBoxes("1")}
          className="details-right2-box w-100"
          style={{ borderBottom: selectedBox !== "1" && "2px solid #FBB040" }}
        >
          <div className="d-flex gap-2 align-items-start w-100 p-3">
            {/* <input className="align-self-start mt-1" id="content" type="radio" name="selectInsurer" /> */}
            <div className="icon-check">
              <img
                src={selectedBox === "1" ? iconChecked : iconUnchecked}
                alt="check"
              />
            </div>
            <div className="d-flex align-self-start p-0 flex-grow-1 flex-column gap-2">
              <div className="label-text">Content</div>
              <div className="details-right2-content-text">
                Content includes Plant & Machinery, Furniture & Fixtures and any
                <br />
                other content within the building premises
              </div>
              {selectedBox === "1" && (
                <Input
                  className="mt-3"
                  type="text"
                  placeholder="₹ "
                  value={value}
                  onChange={handleChange}
                />
              )}
              {selectedBox === "1" && (
                <div className="value-between-text">
                  Content value between <span>50,000</span> to <span>50</span>{" "}
                  Cr
                </div>
              )}
            </div>
            <div className="icon-container">
              <img src={icon1} alt="icon1" />
            </div>
          </div>
        </div>

        {/* ****Second Box**** */}
        <div
          onClick={() => handleClickBoxes("2")}
          className="details-right2-box w-100"
          style={{ borderBottom: selectedBox !== "2" && "2px solid #2DA44A" }}
        >
          <div className="d-flex gap-2 align-items-start w-100 p-3">
            {/* <input className="align-self-start mt-1" id="content" type="radio" name="selectInsurer" /> */}
            <div className="icon-check">
              <img
                src={selectedBox === "2" ? iconChecked : iconUnchecked}
                alt="check"
              />
            </div>
            <div className="d-flex align-self-start p-0 flex-grow-1 flex-column gap-2">
              <div className="label-text">Stock</div>
              <div className="details-right2-content-text">
                Stock includes Raw Materials, Open Stock, Finished Stock within
                the
                <br /> building premises
              </div>
              {selectedBox === "2" && (
                <Input
                  className="mt-3"
                  type="text"
                  placeholder="₹ "
                  value={value}
                  onChange={handleChange}
                />
              )}
              {selectedBox === "2" && (
                <div className="value-between-text">
                  Stock value between <span>50,000</span> to <span>50</span>{" "}
                  Cr
                </div>
              )}
            </div>
            <div className="icon-container">
              <img src={icon2} alt="icon1" />
            </div>
          </div>
        </div>

        {/* ****Third Box**** */}

        <div
          onClick={() => handleClickBoxes("3")}
          className="details-right2-box w-100"
          style={{ borderBottom: selectedBox !== "3" && "2px solid #FBB040" }}
        >
          <div className="d-flex gap-2 align-items-start w-100 p-3">
            {/* <input className="align-self-start mt-1" id="content" type="radio" name="selectInsurer" /> */}
            <div className="icon-check">
              <img
                src={selectedBox === "3" ? iconChecked : iconUnchecked}
                alt="check"
              />
            </div>
            <div className="d-flex align-self-start p-0 flex-grow-1 flex-column gap-2">
              <div className="label-text">Building</div>
              <div className="details-right2-content-text">
                Building includes the structure of your establishment with
                plinth
                <br />
                and foundation
              </div>
              {selectedBox === "3" && (
                <Input
                  className="mt-3"
                  type="text"
                  placeholder="₹ "
                  value={value}
                  onChange={handleChange}
                />
              )}
              {selectedBox === "3" && (
                <div className="value-between-text">
                  Building value between <span>50,000</span> to <span>50</span>{" "}
                  Cr
                </div>
              )}
            </div>
            <div className="icon-container">
              <img src={icon3} alt="icon1" />
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleSubmitDetails} className="proceed-button mt-5 mb-2">
        Proceed
      </div>
    </div>
  );
};

export default DetailsRight2;
