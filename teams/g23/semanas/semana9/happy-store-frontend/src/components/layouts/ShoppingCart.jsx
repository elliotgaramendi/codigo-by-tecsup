const ShoppingCart = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li
        class="rounded-2xl overflow-hidden transition-shadow grid grid-cols-[1fr,_2fr] hover:shadow-xl hover:shadow-sky-500"
      >
        <img
          src="https://i.dummyjson.com/data/products/30/thumbnail.jpg"
          alt="Key Holder"
          width="64"
          height="128"
          class="w-full h-32 object-cover bg-zinc-700"
        />
        <div class="h-32 p-3 bg-zinc-800 flex flex-col gap-0.5">
          <h2 class="text-zinc-400 text-xs font-bold">Golden</h2>
          <h3 class="text-sky-500 text-sm font-extrabold">Key Holder</h3>
          <h4 className="text-xs"> <span class="text-sky-500 font-bold">$29.12</span> <span class="line-through">$30.00</span> <sup class="py-0.5 px-2 rounded-lg bg-sky-600">-2.92%</sup>
          </h4>
        </div>
      </li>
    </ul>
  );
};

export default ShoppingCart;