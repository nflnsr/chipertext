import { useState } from "react";
import { playfair } from "../utils/playfair";

function Caesar() {
  const [result, setResult] = useState([]);
  const [text, setInput] = useState("");
  const [key, setKey] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const playFair = playfair(text, key);
    setResult(playFair);
  };

  return (
    <>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex justify-center items-center w-56 mx-auto gap-3 h-screen flex-col"
      >
        <h1>Caesar Chiper</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setInput(e.target?.value)}
          className="pl-1 ring-1 ring-slate-400 w-full"
          placeholder="text"
        />
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target?.value)}
          className="pl-1 ring-1 ring-slate-400 w-full"
          placeholder="key"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </>
  );
}

export { Caesar };
