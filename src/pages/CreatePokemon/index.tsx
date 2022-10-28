import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { ContainerCreateCard } from "./style";

export function CreatePokemon() {
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPokemon: Pokemon = {
      name: e.currentTarget.namePokemon.value,
      description: e.currentTarget.descriptionPokemon.value,
      type: [e.currentTarget.typePokemon.value],
      height: parseFloat(e.currentTarget.heightPokemon.value),
      weight: parseFloat(e.currentTarget.weightPokemon.value),
      imageURL: e.currentTarget.imagePokemon.value,
    };

    api
      .createPokemon(newPokemon)
      .then((response) => navigate("/"))
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <ContainerCreateCard>
      <h3>Criar Pokemon</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="namePokemon"
          placeholder="Nome do pokemon"
          required
        />
        <textarea
          rows={4}
          cols={50}
          name="descriptionPokemon"
          placeholder="Descrição do pokemon"
          required
        />
        <input
          type="text"
          name="typePokemon"
          placeholder="Tipo do pokemon"
          required
        />
        <input
          type="number"
          name="heightPokemon"
          step="0.01"
          placeholder="Altura do pokemon"
          required
        />
        <input
          type="number"
          name="weightPokemon"
          step="0.01"
          placeholder="Peso do pokemon"
          required
        />
        <input
          name="imagePokemon"
          placeholder="Link da imagem do pokemon"
          required
        />
        <button type="submit">Criar</button>
      </form>
    </ContainerCreateCard>
  );
}
