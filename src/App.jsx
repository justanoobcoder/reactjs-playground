import { useState } from "react";
import Counter from "./counter/Counter";
import RandomQuote from "./quote/RandomQuote";
import InfiniteScroll from "./scroll/InfiniteScroll";
import StopWatch from "./stopwatch/StopWatch";

function App() {
  const options = [
    {
      value: "counter",
      text: "Counter",
      component: <Counter />,
    },
    {
      value: "stop-watch",
      text: "Stop Watch",
      component: <StopWatch />,
    },
    {
      value: "random-quotes",
      text: "Random Quotes",
      component: <RandomQuote />,
    },
    {
      value: "infinite-scroll",
      text: "Infinite Scroll",
      component: <InfiniteScroll />,
    },
  ];

  const [selected, setSelected] = useState(0);

  function handleSelect(e) {
    const index = options.findIndex((o) => o.value === e.target.value);
    setSelected(index);
  }

  return (
    <>
      <div className="m-5">
        <select
          value={options[selected].value}
          onChange={handleSelect}
          className="rounded-sm p-2 bg-red-100"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
      </div>
      <div className="container">{options[selected].component}</div>
    </>
  );
}

export default App;
