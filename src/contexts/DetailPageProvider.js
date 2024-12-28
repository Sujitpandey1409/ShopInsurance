import React, { createContext, useState } from 'react';

// Create a context
export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  // Shared state for vehicle and policy details
  const [detailPageData, setDetailPageData] = useState({
    riskLocationPinCode: '',
    typeOfBusiness: '',
    ownerShipType: [],
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
