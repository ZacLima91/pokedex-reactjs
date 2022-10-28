import { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../utils/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { ContainerCards } from "./style";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api
      .getPokemons()
      .then((response) => {
        setPokemons(response ?? []);
      })
      .catch((err: any) => {
        console.log(err);
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
