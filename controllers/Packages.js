import { createContext, useState } from 'react';

export const PackagesContext = createContext([]);

export default function Packages({ children }) {
  return <PackagesContext.Provider value={{}}>{children}</PackagesContext.Provider>;
}
