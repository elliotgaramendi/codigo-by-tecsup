import { useSelector } from 'react-redux';

const useCart = () => {
  return useSelector(state => state.cart);
};

export default useCart;