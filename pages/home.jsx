import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-lg font-semibold underline">Cipher Text</h1>
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
          Vignere
        </Link>
        <Link to="/extended-vignere" className="hover:underline hover:text-blue-400">
          Extended Vigenere
        </Link>
        <Link to="/variant-vignere" className="hover:underline hover:text-blue-400">
          Variant Vigenere
        </Link>
      </div>
    </>
  );
}

export { Home };
