import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Search } from "./pages/Search";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CreatePokemon } from "./pages/CreatePokemon";
import { GetByPokemon } from "./pages/Pokemon";
import { Pokemon } from "./utils/types/pokemon.type";
import api from "./utils/api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="/create" element={<CreatePokemon />} />
        <Route path="/pokemon/:id" element={<GetByPokemon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
