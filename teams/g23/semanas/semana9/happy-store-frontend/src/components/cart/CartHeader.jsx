const CartHeader = () => {
  return (
    <header className="py-1 border-b-2">
      <nav>
        <div className="flex items-center justify-between">
          <h2 className="text-sky-500 text-xl font-extrabold">Carrito</h2>
          <a href="#header" className="text-xl">✖</a>
        </div>
      </nav>
    </header>
  );
};

export default CartHeader;