import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.quotable.io/random";

export default function RandomQuote() {
  const [quote, setQuote] = useState();

  async function getQuote() {
    const res = await axios.get(url);
    setQuote(res.data);
  }

  useEffect(() => {
    getQuote();
  }, []);

  function handleNext() {
    getQuote();
  }

  return (
    <div>
      {quote && (
        <>
          <q className="italic text-violet-600">{quote.content}</q>
          <p className="text-right mb-4">
            <i className="fa-solid fa-dash"></i>
            {quote.author}
          </p>
        </>
      )}
      <button className="btn block mx-auto" onClick={handleNext}>
        Next Quote
      </button>
    </div>
  );
}
