import React, { useContext, useEffect, useState } from "react";
import "./RightSectionCard.css";
import { MdArrowForwardIos } from "react-icons/md";
import MyComparisionCard from "./MyComparisionCard";
import Drawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import { PlanContext } from "../../contexts/PlanProvider";
import handAddonIcon from "../../assets/handNote.svg";
import listDot from "../../assets/listDot.svg";
import arrowRight from "../../assets/Arrow_right.svg";
import tickOk from "../../assets/TickoK.svg";

const InsuranceCard = ({
  comparisonData,
  setShowComparison,
  id,
  setComparisonData,
  companyLogo,
  companyName,
  plan,
  medicalExpenses,
  tripCancellation,
  baggageLoss,
  price,
}) => {
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  // useEffect(() => {
  //     console.log(comparisonData);
  // }, [comparisonData]);
  const handleBuyNow = () => {
    navigate("/travel-verification");
  };

  const handleChangeCompare = (e) => {
    if (e.target.checked) {
      const newData = {
        id,
        img: companyLogo,
        title: companyName,
        text: "exploreGold",
      };
      setComparisonData([...comparisonData, newData]);
      setShowComparison(true);
    } else {
      const newData = comparisonData.filter((el) => el.id !== id);
      setComparisonData(newData);
      if (newData.length) setShowComparison(true);
    }
  };

  const checkIdExists = (state, idToCheck) => {
    return state.some((item) => item.id === idToCheck);
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="d-flex">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
          <div className="company-name">{companyName}</div>
        </div>
        <label className="compare-label">
          Compare
          <input
            onChange={handleChangeCompare}
            checked={checkIdExists(comparisonData, id)}
            type="checkbox"
          />
        </label>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column mt-4">
            {/* <h2>{plan}</h2> */}
            <h2>{"Premium Amount"}</h2>
            <p className="digital-process">{"₹ 19,086"}</p>
          </div>
          <div className="d-flex flex-column">
            <span className="you-pay">Cover amount</span>
            <span className="price">₹ {price} Crores</span>
          </div>
          <div className="price-section gap-3">
            <button onClick={handleBuyNow} className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
        <div className="add-on-section">
          <div className="d-flex gap-1">
            <img
              style={{ rotate: "90deg", height: "23px", width: "22px" }}
              src={handAddonIcon}
              alt="iconAdd"
            />
            <div className="text-included-addOns">Included Addons</div>
          </div>
          <div className="add-on-lists">
            <div className="d-flex gap-2">
              <img src={listDot} alt="." />
              <div className="add-on-list-text">Plate Glass</div>
              <img src={listDot} alt="." />
              <div className="add-on-list-text">Plate Glass</div>
            </div>
          </div>
          <div className="one-more-link">
            {"+1 more "}{" "}
            <img style={{ textDecoration: "none" }} src={arrowRight} alt=">" />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="benefits-section mt-3">
            <div className="text-top-coverage">Top Coverages</div>
            <div className="top-coverage-list-container">
              <img src={tickOk} alt="done" />
              <div className="text-top-coverage-list">Fire</div>
            </div>
            <div className="top-coverage-list-container">
              <img src={tickOk} alt="done" />
              <div className="text-top-coverage-list">
                Explosion and Implosion
              </div>
            </div>
            <div
              className="top-coverage-list-container"
              style={{ background: "#EEFFF2", cursor: "pointer" }}
            >
              <div className="text-top-coverage-list">+3</div>
            </div>
          </div>
          <div onClick={() => setDrawer(true)} className="view-features">
            View All Features <MdArrowForwardIos />
          </div>
          {drawer && (
            <Drawer
              isOpen={drawer}
              handleClose={() => setDrawer(false)}
              companyLogo={companyLogo}
              companyName={companyName}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const RightSectionCard = ({ data }, { quotations }) => {
  const [showMore, setShowMore] = useState(false);
  // const [comparisonData, setComparisonData] = useState([]);
  const { comparisonData, setComparisonData } = useContext(PlanContext);
  const [showComparison, setShowComparison] = useState(false);

  const visibleCards = showMore ? data : data.slice(0, 4);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="card-wrapper">
        {visibleCards.map((card, index) => (
          <InsuranceCard
            id={index}
            comparisonData={comparisonData}
            setShowComparison={setShowComparison}
            setComparisonData={setComparisonData}
            key={index}
            companyLogo={card.companyLogo}
            companyName={card.companyName}
            plan={card.plan}
            medicalExpenses={card.medicalExpenses}
            tripCancellation={card.tripCancellation}
            baggageLoss={card.baggageLoss}
            price={card.price}
          />
        ))}
      </div>
      <button onClick={handleShowMore} className="show-more-btn">
        {showMore ? "Show Less" : "Show More"}
      </button>
      {comparisonData.length > 0 && showComparison && (
        <MyComparisionCard
          comparisonData={comparisonData}
          setShowComparison={setShowComparison}
        />
      )}
    </div>
  );
};

export default RightSectionCard;
