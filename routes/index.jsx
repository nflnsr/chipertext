import { Routes, Route } from "react-router-dom";

import { Home } from "../components/home";
import { Affine } from "../components/affine";
import { Caesar } from "../components/caesar";
import { ExtendedVignere } from "../components/extended-vignere";
import { Playfair } from "../components/playfair";
import { VarianVignere } from "../components/varian-vignere";
import { Vignere } from "../components/vignere";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/caesar" element={<Caesar />} />
      <Route path="/affine" element={<Affine />} />
      <Route path="/playfair" element={<Playfair />} />
      <Route path="/vignere" element={<Vignere />} />
      <Route path="/varian-vignere" element={<VarianVignere />} />
      <Route path="/extended-vignere" element={<ExtendedVignere />} />
    </Routes>
  );
}

export default Index;
