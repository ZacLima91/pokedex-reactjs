import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card";
import api from "../../utils/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { ContainerCardsSearch } from "./style";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
  const query: any = searchParams.get("q");

  const getSearch = async (url: string) => {
    const response: Pokemon[] | undefined = await api.getPokemons();
    setPokemons(response);
  };
  const length: any = pokemons?.length;

  useEffect(() => {
    const searchWithQueryUrl = `?fdfs&query=${query}`;
    getSearch(searchWithQueryUrl);
  }, [query]);
  return (
    <ContainerCardsSearch>
      <div className="title">
        <h2>
          Resultados para: <span className="query-text">{query}</span>
        </h2>
      </div>
      <div className="movies-container">
        {length > 0 &&
          pokemons
            ?.filter((val) => {
              if (query == "") {
                return val;
              } else if (
                val.name?.toLowerCase().includes(query.toLowerCase())
              ) {
                return val;
              }
            })
            .map((person) => (
              <Card
                key={person.id}
                name={person?.name}
                imageURL={person?.imageURL}
              />
            ))}
      </div>
    </ContainerCardsSearch>
  );
};
