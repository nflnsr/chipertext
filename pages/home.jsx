import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <Link to="/affine" className="hover:underline hover:text-blue-400">
          Affine
        </Link>
        <Link to="/caesar" className="hover:underline hover:text-blue-400">
          Caesar
        </Link>
        <Link to="/extended-vignere" className="hover:underline hover:text-blue-400">
          Extended Vignere
        </Link>
        <Link to="/playfair" className="hover:underline hover:text-blue-400">
          Playfair
        </Link>
        <Link to="/varian-vignere" className="hover:underline hover:text-blue-400">
          Varian Vignere
        </Link>
        <Link to="/vignere" className="hover:underline hover:text-blue-400">
          Vignere
        </Link>
      </div>
    </>
  );
}

export { Home };
