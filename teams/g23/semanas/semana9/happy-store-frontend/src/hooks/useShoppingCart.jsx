import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export default useShoppingCart;