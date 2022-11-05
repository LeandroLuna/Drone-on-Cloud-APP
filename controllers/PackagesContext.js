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
    const randomTrackingNumber = Math.floor(100000 + Math.random() * 900000);
    newList.push(new Package(randomTrackingNumber, 'Item de teste', '10/10/1010', '01/01/0101', 'Não entregue', false));
    setPackages(newList);
  }

  function deletePackage(trackingNumber) {
    let newList = packages.filter((item) => item.trackingNumber !== parseInt(trackingNumber));
    // Caso a lista filtrada tenha tamanho menor que a lista original, houve alteração.
    if (newList.length !== packages.length) {
      setPackages(newList);
      alert(`Entrega de código de rastreio "${trackingNumber}" excluida com sucesso!`);
    } else {
      alert(`Nenhuma entrega com código de rastreio "${trackingNumber}" informado. Tente novamente.`);
    }
  }

  function searchPackage(trackingNumber) {
    let foundPackage = packages.find((item) => item.trackingNumber === parseInt(trackingNumber));
    foundPackage
      ? alert(`Item encontrado!\n${JSON.stringify(foundPackage, null, 4).replace(/[{}]/g, '')}`)
      : alert(`Sem entregas encontradas com o código de rastreio "${trackingNumber}" informado.`);
  }

  function setFavorite(trackingNumber) {
    let newList = packages;
    const packageIndex = newList.findIndex((item) => item.trackingNumber === trackingNumber);
    newList[packageIndex].flagged = !newList[packageIndex].flagged;
    setPackages([...newList]);
  }

  return <PackagesContext.Provider value={{ packages, addPackage, deletePackage, searchPackage, setFavorite }}>{children}</PackagesContext.Provider>;
}
