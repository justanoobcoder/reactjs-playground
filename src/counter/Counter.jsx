import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter((prev) => prev + 1);
  const handleMinus = () => setCounter((prev) => prev - 1);

  return (
    <div className="text-center">
      <button className="round-btn text-xl" onClick={handleAdd}>
        +
      </button>
      <h1 className="text-4xl my-5">{counter}</h1>
      <button className="round-btn text-xl" onClick={handleMinus}>
        -
      </button>
    </div>
  );
}
