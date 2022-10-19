import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { ContainerCreateCard } from "./style";

export function CreatePokemon() {
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const typePokemon = [];

    typePokemon.push(e.currentTarget.typePokemon.value);
    const height = parseFloat(e.currentTarget.heightPokemon.value);
    const weight = parseFloat(e.currentTarget.weightPokemon.value);

    const newPokemon: Pokemon = {
      name: e.currentTarget.namePokemon.value,
      description: e.currentTarget.descriptionPokemon.value,
      type: typePokemon,
      height: height,
      weight: weight,
      imageURL: e.currentTarget.imagePokemon.value,
    };

    api.post("/pokemons", newPokemon).catch((err) => {
      console.log(err.response);
    });

    navigate("/");
  }

  return (
    <ContainerCreateCard>
      <h3>Criar Pokemon</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="namePokemon" placeholder="Nome do pokemon" />
        <textarea
          rows={4}
          cols={50}
          name="descriptionPokemon"
          placeholder="Descrição do pokemon"
        />
        <input type="text" name="typePokemon" placeholder="Tipo do pokemon" />
        <input
          type="number"
          name="heightPokemon"
          step="0.1"
          placeholder="Altura do pokemon"
        />
        <input
          type="number"
          name="weightPokemon"
          step="0.1"
          placeholder="Peso do pokemon"
        />
        <input name="imagePokemon" placeholder="Link da imagem do pokemon" />
        <button type="submit">Criar</button>
      </form>
    </ContainerCreateCard>
  );
}
