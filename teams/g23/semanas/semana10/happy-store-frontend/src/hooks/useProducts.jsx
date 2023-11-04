import { useContext } from "react";
import { ProductContext } from "../state/context/ProductContext";

const useProducts = () => {
  return useContext(ProductContext);
};

export default useProducts;