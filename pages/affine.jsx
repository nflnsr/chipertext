import { useState } from "react";
import { affineEncrypt, affineDecrypt } from "../utils/affine";
import { useNavigate } from "react-router-dom";

function Affine() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [key1, setKey1] = useState(0);
  const [key2, setKey2] = useState(0);

  const navigate = useNavigate();

  const handleEncrypt = () => {
    const result = affineEncrypt(text.toUpperCase(), key1, key2);
    setResult(result);
  };

  const handleDecrypt = () => {
    const result = affineDecrypt(text.toUpperCase(), key1, key2);
    setResult(result);
  };

  return (
    <>
      <main className="h-[calc(100svh)]">
        <div className="absolute w-56 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-lg font-semibold text-gray-700 underline">Affine Cipher</h1>
          <div className="py-2 space-y-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target?.value)}
              className="w-full px-1 ring-1 ring-slate-400"
              placeholder="text"
            />
            <input
              type="number"
              value={key1}
              onChange={(e) => setKey1(e.target?.value)}
              className="w-full px-1 ring-1 ring-slate-400"
              placeholder="key 1"
            />
            <input
              type="number"
              value={key2}
              onChange={(e) => setKey2(e.target?.value)}
              className="w-full px-1 ring-1 ring-slate-400"
              placeholder="key 2"
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

export { Affine };
