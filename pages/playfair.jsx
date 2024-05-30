import { useState } from "react";
import { playfairCipher } from "../utils/playfair";
import { useNavigate } from "react-router-dom";

function Playfair() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [key, setKey] = useState("");

  const navigate = useNavigate();

  const handleEncrypt = () => {
    const result = playfairCipher(text, key, true);
    setResult(result.toUpperCase());
  };

  const handleDecrypt = () => {
    const result = playfairCipher(text, key, false);
    setResult(result.toUpperCase());
  };

  return (
    <>
      <main className="h-[calc(100svh)]">
        <div className="absolute w-56 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-lg font-semibold text-gray-700 underline">Playfair Cipher</h1>
          <div className="py-2 space-y-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target?.value)}
              className="w-full px-1 ring-1 ring-slate-400"
              placeholder="text"
            />
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target?.value)}
              className="w-full px-1 ring-1 ring-slate-400"
              placeholder="key"
            />
          </div>
          <div className="flex flex-col gap-1 pb-1.5 text-white">
            <button type="button" onClick={handleEncrypt} className="pb-1 rounded-md bg-sky-400">
              Encrypt
            </button>
            <button type="button" onClick={handleDecrypt} className="pb-1 bg-red-400 rounded-md">
              Decrypt
            </button>
          </div>
          <div className="pt-1.5">
            <p className="text-sm font-semibold text-gray-800 decoration-slate-500">
              {result && "Result"}
            </p>
            <p>{result}</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="w-full pb-0.5 bg-gray-300 rounded-md hover:bg-gray-200"
          >
            back
          </button>
        </div>
      </main>
    </>
  );
}

export { Playfair };
