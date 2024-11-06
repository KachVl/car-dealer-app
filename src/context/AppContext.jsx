'use client';

import React, { useEffect, useState } from 'react';
import { getData } from '@/api/ApiClient';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getData()
      .then((data) => setCarsList(data.Results))
      .catch(() => setIsLoadingError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const contextValue = {
    isLoading,
    setIsLoading,
    isLoadingError,
    setIsLoadingError,
    carsList,
    setCarsList,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
