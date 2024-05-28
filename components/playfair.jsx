import { useState } from "react";
import { playfair } from "../utils/playfair";
import { useNavigate } from "react-router-dom";

function Playfair() {
  const [result, setResult] = useState();
  const [text, setInput] = useState("");
  const [key, setKey] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const playFair = playfair(text, key);
    setResult(playFair);
  };

  return (
    <>
      <main className="h-screen">
        <button
          onClick={() => navigate(-1)}
          className="px-4 pb-0.5 bg-gray-300 rounded-md hover:bg-gray-200"
        >
          back
        </button>
        <form
          onSubmit={(e) => handleOnSubmit(e)}
          className="absolute w-56 space-y-3 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <h1>Playfair Chiper</h1>
          <input
            type="text"
            value={text}
            onChange={(e) => setInput(e.target?.value)}
            className="w-full pl-1 ring-1 ring-slate-400"
            placeholder="text"
          />
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target?.value)}
            className="w-full pl-1 ring-1 ring-slate-400"
            placeholder="key"
          />
          <button type="submit">Submit</button>
          <p>{result && "Result : " + result}</p>
        </form>
      </main>
    </>
  );
}

export { Playfair };
