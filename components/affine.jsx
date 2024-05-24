import { useState } from "react";
import { playfair } from "../utils/playfair";

function Affine() {
  const [result, setResult] = useState([]);
  const [text, setInput] = useState("");
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const playFair = playfair(text, key1, key2);
    setResult(playFair);
  };

  return (
    <>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex justify-center items-center w-56 mx-auto gap-3 h-screen flex-col"
      >
        <h1>Affine Chiper</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setInput(e.target?.value)}
          className="pl-1 ring-1 ring-slate-400 w-full"
          placeholder="text"
        />
        <input
          type="text"
          value={key1}
          onChange={(e) => setKey1(e.target?.value)}
          className="pl-1 ring-1 ring-slate-400 w-full"
          placeholder="key 1"
        />
        <input
          type="text"
          value={key2}
          onChange={(e) => setKey2(e.target?.value)}
          className="pl-1 ring-1 ring-slate-400 w-full"
          placeholder="key 2"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </>
  );
}

export { Affine };
