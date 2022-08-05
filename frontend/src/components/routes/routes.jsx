import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";

import Produtos from "../Produtos/Produtos";
import Sobre from "../Sobre/Sobre";
import Produto from "../Produto/Produto";

export default function Rotas() {
    return (
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    );
  }
  