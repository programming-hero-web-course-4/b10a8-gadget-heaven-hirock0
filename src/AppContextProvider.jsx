import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const AppContext = createContext();
export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Products");
  const [carts, setCarts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [totalCartsPrice, setTotalCartsPrice] = useState([]);
  const value = {
    price,
    setPrice,
    products,
    setProducts,
    category,
    setCategory,
    carts,
    setCarts,
    wishlists,
    setWishlists,
    totalCartsPrice,
    setTotalCartsPrice,
  };
  const onAllProductsWithCategories = async () => {
    try {
      const fetchData = await fetch("/api/informations.json");
      const reqApi = await fetchData.json();
      const productsData = await reqApi?.products;
      setProducts(productsData);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    onAllProductsWithCategories();
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
