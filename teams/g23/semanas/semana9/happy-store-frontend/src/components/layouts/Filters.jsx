/* eslint-disable react/prop-types */

import { useState } from 'react';

const Filters = ({ setFilters }) => {
  // ToDo mejorar el estado de los filtros
  const [inputValues, setInputValues] = useState({
    minPrice: 0,
    category: ''
  });

  const { minPrice, category } = inputValues;

  const handleInput = e => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
    setFilters(f => ({
      ...f,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <label htmlFor="minPrice">A partir de: </label>
        <input
          type="range"
          name="minPrice"
          id="minPrice"
          min={0}
          max={1500}
          value={minPrice}
          onInput={handleInput}
        />
        <span>$ {minPrice}</span>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="category">Categoría: </label>
        <select
          name="category"
          id="category"
          className="border rounded-lg bg-zinc-800"
          value={category}
          onInput={handleInput}
        >
          <option value="">Todos</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;