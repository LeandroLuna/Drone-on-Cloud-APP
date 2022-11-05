import { createContext, useState } from 'react';
import { Package } from '../models/Package';

export const PackagesContext = createContext([]);

export default function PackagesProvider({ children }) {
  const [packages, setPackages] = useState([]);

  // function addPackage(item: Package) {
  //   let newList = packages;
  //   newList.push(item);
  //   setPackages(newList);

  //   console.log(packages);
  // }

  function addPackage() {
    let newList = packages;
    newList.push([101010, 'Item de teste', '10/10/1010', '01/01/0101', 'Delivered', false]);
    setPackages(newList);
  }

  function deletePackage(item) {
    let newList = packages.filter(({ trackingNumber }) => trackingNumber !== item.trackingNumber);
    setPackages(newList);

    console.log(newList);
  }

  function searchPackage(trackingNumber) {
    let foundPackage = packages.find((item) => item.trackingNumber === trackingNumber);
    foundPackage ? console.log(foundPackage) : console.log('Sem itens com esse código de rastreio');

    return foundPackage;
  }

  function setFavorite(trackingNumber) {
    let foundPackage = packages.find((item) => item[0] === trackingNumber);
    return (foundPackage[5] = !foundPackage[5]);
  }

  return <PackagesContext.Provider value={{ packages, addPackage, deletePackage, searchPackage, setFavorite }}>{children}</PackagesContext.Provider>;
}
