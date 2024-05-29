import { useState } from "react";
import { caesarEncrypt, caesarDecrypt } from "../utils/caesar";
import { useNavigate } from "react-router-dom";

function ExtendedVigenere() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [shift, setShift] = useState(0);

  const navigate = useNavigate();

  const handleEncrypt = () => {
    const result = caesarEncrypt(text.toUpperCase(), shift);
    setResult(result);
  };

  const handleDecrypt = () => {
    const result = caesarDecrypt(text.toUpperCase(), shift);
    setResult(result);
  };

  return (
    <>
      <main className="h-[calc(100svh)]">
        <button
          onClick={() => navigate(-1)}
          className="px-4 pb-0.5 bg-gray-300 rounded-md hover:bg-gray-200"
        >
          back
        </button>
        <div className="absolute w-56 space-y-3 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-lg font-semibold text-gray-700 underline">Caesar Cipher</h1>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target?.value)}
            className="w-full px-1 ring-1 ring-slate-400"
            placeholder="text"
          />
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(e.target?.value)}
            className="w-full px-1 ring-1 ring-slate-400"
            placeholder="key"
          />
          <div className="flex flex-col gap-1 text-white">
            <button type="button" onClick={handleEncrypt} className="pb-1 rounded-md bg-sky-400">
              Encrypt
            </button>
            <button type="button" onClick={handleDecrypt} className="pb-1 bg-red-400 rounded-md">
              Decrypt
            </button>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 decoration-slate-500">
              {result && "Result"}
            </p>
            <p>{result}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export { ExtendedVigenere };
