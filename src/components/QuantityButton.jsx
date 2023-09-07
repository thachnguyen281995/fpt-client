import React, { useState } from 'react';

const QuantityButton = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    if (count < 4) {
      setCount((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div className="flex flex-row h-10 w-[70%] ml-auto  rounded-lg  bg-transparent mt-1">
        <button
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-full rounded-l cursor-pointer outline-none"
          onClick={handleDecrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="text"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
          name="custom-input-number"
          value={count}
          onChange={(e) => e.target.value}
        ></input>
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-full rounded-r cursor-pointer"
          onClick={handleIncrement}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default QuantityButton;
