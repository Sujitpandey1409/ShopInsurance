import React, { useContext, useEffect, useRef, useState } from "react";
import "./EditPolicyDetailPopUp.css";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { IoMdClose } from "react-icons/io";
import { DetailContext } from "../../contexts/DetailPageProvider";
import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";

export default function EditPolicyDetailPopUp({
  handleClose,
  isOpen,
  setFuelType,
}) {
  const {
    detailPageData,
    setDetailPageData,
  } = useContext(DetailContext);

  const [startDatePopUp, setstartDatePopUp] = useState();
  const [endDatePopUp, setendDatePopUp] = useState();
  const [tenure, setTenure] = useState(detailPageData.policyTenure);
  const [businessType, setBusinessType] = useState(detailPageData.typeOfBusiness);
  const [valueContent, setValueContent] = useState("");
  const [valueStock, setValueStock] = useState("");
  const [valueBuilding, setValueBuilding] = useState("");

  const popUpRef = useRef(null);

  // Validation errors
  const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") {
//       setmailIdPopUp(value);
//     } else {
//       setmobileNumberPopUp(value);
//     }
//   };

  const validateDatas = () => {
    let valid = true;
    let validationErrors = {};

    if (!startDatePopUp) {
      validationErrors.startDatePopUp = "Start Date is required";
      valid = false;
    }

    if (!valueContent) {
      validationErrors.valueContent = "Total Contetnt value is required";
      valid = false;
    }   

    if (!tenure) {
      validationErrors.tenure = "Policy tenure is required";
      valid = false;
    }

    if (!businessType) {
      validationErrors.businessType = "Business type is required";
      valid = false;
    }

    if (!valueStock) {
      validationErrors.valueStock = "Total Stock value is required";
      valid = false;
    }

    if (!valueBuilding) {
      validationErrors.valueBuilding = "Building value is required";
      valid = false;
    }

    // if (!travelersCountPopUp) {
    //   validationErrors.travelersCountPopUp = "Traveller's Count is required";
    //   valid = false;
    // }

    setErrors(validationErrors);
    return valid;
  };

  const handleSubmitPolicyDetails = (e) => {
    e.preventDefault();

    if (!validateDatas()) {
      console.log("validation errors");
      return;
    }

    setDetailPageData({
      ...detailPageData,
      startDate: startDatePopUp,
      buildingSumInsured: valueBuilding,
      stockSumInsured:valueStock,
      contentSumInsured:valueContent
    });

    console.log({
      
    });
    handleClose();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  return (
    <div className="edit-policy-detail-popUp-container">
      <Card>
        <div ref={popUpRef} className="edit-policy-detail-popUp">
          <div className="padding-header">
            <span onClick={handleClose} className="close-Button">
              <IoMdClose size={21} />
            </span>
            <p style={{ fontWeight: "700", fontSize: "17px" }}>
              Edit Policy Detail
            </p>
          </div>
          <hr />
          <CardBody>
            <Form onSubmit={handleSubmitPolicyDetails}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label className="font-600">Start Date</Label>
                    <div
                      className="d-flex align-items-center"
                      style={{ position: "relative" }}
                    >
                      <DatePicker
                        selected={startDatePopUp}
                        onChange={(date) => setstartDatePopUp(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                      />
                      <span
                        className="input-icon"
                        style={{ cursor: "pointer", position: "absolute" }}
                      >
                        <CiCalendarDate size={20} />
                      </span>
                    </div>
                    {errors.startDatePopUp && (
                      <p className="text-danger">{errors.startDatePopUp}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="font-600">Content Value</Label>
                    <Input
                      type="text"
                      placeholder="₹ "
                      name="valueContent"
                      value={valueContent}
                      onChange={(e)=> setValueContent(e.target.value)}
                    />
                    {errors.valueContent && (
                      <p className="text-danger">{errors.valueContent}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label className="font-600">Policy Tenure</Label>
                    <Input
                      type="select"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Input>
                    {errors.tenure && (
                      <p className="text-danger">{errors.tenure}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="font-600">Travel Type</Label>
                    <Input
                      type="select"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Multiple">Multiple</option>
                      <option value="Single">Single</option>
                    </Input>
                    {errors.travelTypePopUp && (
                      <p className="text-danger">{errors.travelTypePopUp}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                  <Label className="font-600">Stock Value</Label>
                    <Input
                      type="text"
                      placeholder="₹ "
                      value={valueStock}
                      onChange={(e)=>setValueStock(e.target.value)}
                    //   onChange={handleChange}
                    />
                    {errors.valueStock && (
                      <p className="text-danger">{errors.valueStock}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                  <Label className="font-600">Building Value</Label>
                    <Input
                      type="text"
                      placeholder="₹ "
                      value={valueBuilding}
                      onChange={(e)=>setValueBuilding(e.target.value)}
                    />
                    {errors.valueBuilding && (
                      <p className="text-danger">{errors.valueBuilding}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <div className="plan-edit-policy-btn-container">
                <Button onClick={handleClose} outline className="cancel-button">
                  Cancel
                </Button>
                <Button type="submit" className="proceed-button">
                  Proceed
                </Button>
              </div>
            </Form>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
