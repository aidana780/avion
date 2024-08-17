import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const DataContext = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState("a");
  const [product, setProducts] = useState(null);

  const getProducts = async () => {
    try {
    
      const { data } = await axios.get('https://6686930083c983911b02cbc5.mockapi.io/mebel');
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(product, 'test');

  const value = {
    user,
    product,
    getProducts
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default AppContext;

