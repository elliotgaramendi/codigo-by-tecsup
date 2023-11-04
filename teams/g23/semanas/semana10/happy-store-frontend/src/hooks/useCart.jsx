import { useContext } from "react";
import { CartContext } from "../state/context/CartContext";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;