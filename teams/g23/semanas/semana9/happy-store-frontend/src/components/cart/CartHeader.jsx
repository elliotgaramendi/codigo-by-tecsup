const CartHeader = () => {
  return (
    <header className="py-1 flex items-center justify-between border-b-2">
      <h2 className="text-sky-500 text-xl font-extrabold">Carrito</h2>
      <a href="#header" className="text-xl">✖</a>
    </header>
  );
};

export default CartHeader;