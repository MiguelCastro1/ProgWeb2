import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";

import Header from '../Header/Header';
import Produtos from "../Produtos/Produtos";
import Sobre from "../Sobre/Sobre";
import Produto from "../Produto/Produto";
import Add_Produto from "../Add_Produto/Add_Produto";
import Edit_Produto from "../Edit_Produto/Edit_Produto";
import Login from "../Login/Login";
import Home from "../Home/Home";

export default function Rotas() {
    return (
    
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produto/add" element={<Add_Produto />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/produto/:id/edit" element={<Edit_Produto />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    );
  }
  