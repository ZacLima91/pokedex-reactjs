import { FormEvent, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { Pokemon } from "../../../utils/types/pokemon.type";
import { ContainerEditCard } from "./style";

export function EditModalPokemon(props: {
  id: any;
  handleClick: MouseEventHandler<HTMLSpanElement>;
  name: string | number | readonly string[] | undefined;
  description: string | readonly string[] | undefined;
  type: string | number | readonly string[] | undefined;
  height: string | number | readonly string[] | undefined;
  weight: string | number | readonly string[] | undefined;
  imageURL: string | number | readonly string[] | undefined;
}) {
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

    api.patch(`/pokemons/${props.id}`, newPokemon).catch((err) => {
      console.log(err.response);
    });

    navigate('/');
  }

  return (
    <ContainerEditCard>
      <div className="container-header-edit">
        <h3>Criar Pokemon</h3>
        <span onClick={props.handleClick}>X</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={props.name}
          type="text"
          name="namePokemon"
          placeholder="Nome do pokemon"
        />
        <textarea
          defaultValue={props.description}
          rows={4}
          cols={50}
          name="descriptionPokemon"
          placeholder="Descrição do pokemon"
        />
        <input
          defaultValue={props.type}
          type="text"
          name="typePokemon"
          placeholder="Tipo do pokemon"
        />
        <input
          defaultValue={props.height}
          type="number"
          name="heightPokemon"
          step="0.1"
          placeholder="Altura do pokemon"
        />
        <input
          defaultValue={props.weight}
          type="number"
          name="weightPokemon"
          step="0.1"
          placeholder="Peso do pokemon"
        />
        <input
          defaultValue={props.imageURL}
          name="imagePokemon"
          placeholder="Link da imagem do pokemon"
        />
        <button type="submit">Criar</button>
      </form>
    </ContainerEditCard>
  );
}
