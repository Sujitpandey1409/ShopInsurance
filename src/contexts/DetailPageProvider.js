import React, { createContext, useState } from 'react';

// Create a context
export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  // Shared state for vehicle and policy details
  const [detailPageData, setDetailPageData] = useState({
    riskLocationPinCode: '',
    typeOfBusiness: '',
    ownerShipType: [],
    buildingSumInsured:0,
    stockSumInsured:0,
    contentSumInsured:0,
    policyTenure:1,
    startDate:''
  });



  const [selectedInsurers, setSelectedInsurers] = useState('Kotak General Insurance');


  const value = {
    detailPageData,
    setDetailPageData,
    selectedInsurers, setSelectedInsurers
  };

  return (
    <DetailContext.Provider value={value}>
      {children}
    </DetailContext.Provider>
  );
};
