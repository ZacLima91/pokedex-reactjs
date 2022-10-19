import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import api from "../../services/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { ContainerCards } from "./style";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api
      .get("/pokemons")
      .then((response) => setPokemons(response.data))
      .catch((err) => {
        console.log("Erro ao buscar API, erro:", err);
      });
  }, []);

  return (
    <ContainerCards>
      <div>
        {pokemons.map((pokemon: Pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              description={pokemon.description}
              type={pokemon.type}
              height={pokemon.height}
              weight={pokemon.weight}
              imageURL={pokemon.imageURL}
            />
        ))}
      </div>
    </ContainerCards>
  );
}
