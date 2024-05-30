import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="h-[calc(100svh)]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-lg font-semibold underline hover:text-red-500 hover:no-underline">
          Cipher Text
        </h1>
        <Link to="/affine" className="hover:underline hover:text-blue-400">
          Affine
        </Link>
        <Link to="/caesar" className="hover:underline hover:text-blue-400">
          Caesar
        </Link>
        <Link to="/playfair" className="hover:underline hover:text-blue-400">
          Playfair
        </Link>
        <Link to="/vignere" className="hover:underline hover:text-blue-400">
          Vigenere
        </Link>
        <Link to="/extended-vignere" className="hover:underline hover:text-blue-400">
          Extended Vigenere
        </Link>
        <Link to="/variant-vignere" className="hover:underline hover:text-blue-400">
          Variant Vigenere
        </Link>
        <Link
          to="/member"
          className="pt-2 font-medium text-gray-600 underline hover:no-underline hover:text-green-500"
        >
          Group Member
        </Link>
      </div>
    </main>
  );
}

export { Home };
