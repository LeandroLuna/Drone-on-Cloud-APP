import { createContext, useState } from 'react';

export const PackagesContext = createContext([]);

export default function PackagesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return <PackagesContext.Provider value={{}}>{children}</PackagesContext.Provider>;
}
