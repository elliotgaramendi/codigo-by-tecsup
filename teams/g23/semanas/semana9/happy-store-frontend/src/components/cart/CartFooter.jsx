import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatUtil";

const CartFooter = () => {
  const { cartItems } = useCart();

  const [subtotal, setSubtotal] = useState(0);
  const [realPrice, setRealPrice] = useState(0);
  const [shipment, setShipment] = useState(0);

  useEffect(() => {
    setSubtotal(cartItems.reduce((accumulator, element) => accumulator + (element.price * (100 - element.discountPercentage) / 100 * element.quantity), 0));
    setRealPrice(cartItems.reduce((accumulator, element) => accumulator + (element.price * element.quantity), 0));
  }, [cartItems]);

  return (
    <footer className="py-1 border-t-2">
      <nav>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="text-zinc-400 text-base font-extrabold">Subtotal</h3>
            <h4 className="text-sky-500 text-base font-extrabold">{formatCurrency(subtotal)}</h4>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-zinc-400 text-base font-extrabold">Entrega</h3>
            <h4 className="text-sky-500 text-base font-extrabold">{shipment > 0 ? shipment : 'Gratis'}</h4>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-zinc-400 text-base font-extrabold">Descuentos</h3>
            <h4 className="text-sky-500 text-base font-extrabold">{formatCurrency(realPrice - subtotal)}</h4>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-sky-500 text-base font-extrabold">Total</h3>
            <h4 className="text-sky-400 text-base font-extrabold">{formatCurrency(subtotal + shipment)}</h4>
          </div>
          <p className="text-zinc-400 text-xs">Gastos extras serán calculados al finalizar la compra</p>
          <a
            href={`https://api.whatsapp.com/send?phone=51987654321&text=Deseo cotizar: ${cartItems.map((element, index) => `${index + 1}: ${element.quantity} de ${element.title}`).join('; ')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-4 rounded-2xl bg-sky-500 text-center font-semibold transition-colors hover:bg-sky-400"
          >
            Comprar
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default CartFooter;