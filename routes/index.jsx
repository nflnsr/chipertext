import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Affine } from "../pages/affine";
import { Caesar } from "../pages/caesar";
import { ExtendedVigenere } from "../pages/extended-vigenere";
import { Playfair } from "../pages/playfair";
import { VariantVigenere } from "../pages/variant-vigenere";
import { Vigenere } from "../pages/vigenere";
import { Member } from "../pages/member";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/caesar" element={<Caesar />} />
      <Route path="/affine" element={<Affine />} />
      <Route path="/playfair" element={<Playfair />} />
      <Route path="/vignere" element={<Vigenere />} />
      <Route path="/variant-vignere" element={<VariantVigenere />} />
      <Route path="/extended-vignere" element={<ExtendedVigenere />} />
      <Route path="/member" element={<Member />} />
    </Routes>
  );
}

export default Index;
