import { HeaderComponent } from "./style";
import Logo from "../../images/logo-pokedex.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export function Header() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  useEffect(() => {
    api
      .get("/pokemons")
      .then((response) => setPokemon(response.data))
      .catch((err) => {
        console.log("Erro ao buscar API, erro:", err);
      });
  }, []);

  return (
    <HeaderComponent>
      <Link to="/">
        <img src={Logo} alt="Logo pokedex" />
      </Link>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/create">Criar</Link></li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Busque um pokemon"
          value={search}
        />
      </form>
    </HeaderComponent>
  );
}
