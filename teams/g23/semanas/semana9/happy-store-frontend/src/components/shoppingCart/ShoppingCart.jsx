import useShoppingCart from "../../hooks/useShoppingCart";
import { formatCurrency } from "../../utils/formatUtil";

const ShoppingCart = () => {
  const { shoppingCart } = useShoppingCart();

  return (
    <ul className="flex flex-col gap-4">
      {shoppingCart.map(element => {
        const { id, title, price, discountPercentage, brand, thumbnail } = element;
        return (
          <li
            className="rounded-2xl overflow-hidden transition-shadow grid grid-cols-[1fr,_2fr] hover:shadow-xl hover:shadow-sky-500"
            key={id}
          >
            <img
              src={thumbnail}
              alt="Key Holder"
              width="64"
              height="128"
              className="w-full h-32 object-cover bg-zinc-700"
            />
            <div className="h-32 p-3 bg-zinc-800 flex flex-col gap-0.5">
              <h2 className="text-zinc-400 text-xs font-bold">{brand}</h2>
              <h3 className="text-sky-500 text-sm font-extrabold">{title}</h3>
              <h4 className="text-xs"> <span className="text-sky-500 font-bold">{formatCurrency(price * (100 - discountPercentage) / 100)}</span> <span className="line-through">{formatCurrency(price)}</span> <sup className="py-0.5 px-2 rounded-lg bg-sky-600">{discountPercentage * -1}%</sup>
              </h4>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ShoppingCart;