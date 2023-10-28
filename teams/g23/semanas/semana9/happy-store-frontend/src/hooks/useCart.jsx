import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;