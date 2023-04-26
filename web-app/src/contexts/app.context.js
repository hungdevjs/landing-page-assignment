import { createContext } from 'react';

import useResponsive from '../hooks/useResponsive';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const responsiveState = useResponsive();

  return (
    <AppContext.Provider value={{ responsiveState }}>
      {children}
    </AppContext.Provider>
  );
};
