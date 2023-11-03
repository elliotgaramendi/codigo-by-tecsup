import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartList from "./CartList";

const Cart = () => {
  return (
    <div className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-zinc-900/50 flex justify-end opacity-0 pointer-events-none transition-opacity target:opacity-100 target:pointer-events-auto" id="cartOffCanvas">
      <div className="relative w-3/4 max-w-lg h-full p-4 bg-zinc-900/50 flex flex-col gap-4 ">
        <CartHeader />
        <CartList />
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;