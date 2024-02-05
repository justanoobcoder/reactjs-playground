import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://dummyjson.com/quotes";
const limit = 10;

export default function InfiniteScroll() {
  const [skip, setSkip] = useState(0);
  const [quotes, setQuotes] = useState([]);

  async function getQuotes() {
    const res = await axios.get(`${url}?skip=${skip}&limit=${limit}`);
    setQuotes([...quotes, ...res.data.quotes]);
  }

  function handleLoadMore() {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight
    ) {
      setSkip((prev) => prev + limit);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleLoadMore);
    return () => {
      window.removeEventListener("scroll", handleLoadMore);
    };
  }, []);

  useEffect(() => {
    getQuotes();
  }, [skip]);

  return (
    <div>
      {quotes.map((q) => (
        <div key={q.id} className="bg-zinc-50 my-2 p-2 rounded-md">
          <q className="italic text-violet-700">{q.quote}</q>
          <p className="text-right">
            <i className="fa-solid fa-dash"></i>
            {q.author}
          </p>
        </div>
      ))}
    </div>
  );
}
