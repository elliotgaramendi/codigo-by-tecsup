import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProducts = () => {
  return useContext(ProductContext);
};

export default useProducts;