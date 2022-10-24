import { MouseEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditModalPokemon } from "../../components/modals/EditModalPokemon";
import api from "../../services/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { PokemonDetails } from "./style";

export const GetByPokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    const response = await api.get(`pokemons/${id}`);
    setPokemon(response.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const [open, setOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLSpanElement> = () => {
    setOpen(!open);
  };

  return (
    <PokemonDetails>
      <div className="title-container">
        <h1>{pokemon?.name}</h1>
      </div>
      <div className="container-details-card">
        <div className="container-image">
          <img src={pokemon?.imageURL} alt="" />
        </div>
        <div className="container-details-pokemon">
          <div className="container-description">
            <p>Descrição:</p>
            <span>{pokemon?.description}</span>
          </div>
          <div className="container-type">
            <p>Tipo: </p>
            <span>{pokemon?.type}</span>
          </div>
          <div className="container-height">
            <p>Altura: </p>
            <span>{pokemon?.height}m</span>
          </div>
          <div className="container-weight">
            <p>Peso: </p>
            <span>{pokemon?.weight}Kg</span>
          </div>
        </div>
      </div>
      <div className="container-buttons">
        <button onClick={handleClick} className="button-edit">Editar</button>

        <button className="button-delete">Deletar</button>
      </div>
      {open && (
        <EditModalPokemon
          handleClick={handleClick}
          name={pokemon?.name}
          description={pokemon?.description}
          type={pokemon?.type}
          height={pokemon?.height}
          weight={pokemon?.weight}
          imageURL={pokemon?.imageURL} id={pokemon?.id}        />
      )}
    </PokemonDetails>
  );
};
