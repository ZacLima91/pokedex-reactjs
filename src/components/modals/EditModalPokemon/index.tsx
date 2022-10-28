import { FormEvent, MouseEventHandler, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";
import { PokemonUpdate } from "../../../utils/types/pokemon.type";
import { ContainerEditCard } from "./style";
import { IoMdCloseCircle } from "react-icons/io";
import swal from "sweetalert";

export function EditModalPokemon(props: {
  handleClick: MouseEventHandler<HTMLSpanElement> | any;
  getPokemon: any;
  name: string | number | readonly string[] | undefined;
  description: string | readonly string[] | undefined;
  type: string | number | readonly string[] | undefined;
  height: string | number | readonly string[] | undefined;
  weight: string | number | readonly string[] | undefined;
  imageURL: string | number | readonly string[] | undefined;
}) {
  const { id } = useParams();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newPokemon: PokemonUpdate = {
      name: e.currentTarget.namePokemon.value,
      description: e.currentTarget.descriptionPokemon.value,
      type: [e.currentTarget.typePokemon.value],
      height: parseFloat(e.currentTarget.heightPokemon.value),
      weight: parseFloat(e.currentTarget.weightPokemon.value),
      imageURL: e.currentTarget.imagePokemon.value,
    };

    if (id) {
      const pokemonToUpdate = { ...newPokemon, id: id };
      const pokemonResponse = await api.updatePokemon(pokemonToUpdate);
      props.handleClick();
    }
  }

  useEffect(() => {
    props.getPokemon();
  });
  return (
    <ContainerEditCard>
      <div className="container-header-edit">
        <h3>Editar Pokemon</h3>
        <IoMdCloseCircle className="icon-close" onClick={props.handleClick} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={props.name}
          type="text"
          name="namePokemon"
          placeholder="Nome do pokemon"
          required
        />
        <textarea
          defaultValue={props.description}
          rows={4}
          cols={50}
          name="descriptionPokemon"
          placeholder="Descrição do pokemon"
          required
        />
        <input
          defaultValue={props.type}
          type="text"
          name="typePokemon"
          placeholder="Tipo do pokemon"
          required
        />
        <input
          defaultValue={props.height}
          type="number"
          name="heightPokemon"
          step="0.1"
          placeholder="Altura do pokemon"
          required
        />
        <input
          defaultValue={props.weight}
          type="number"
          name="weightPokemon"
          step="0.1"
          placeholder="Peso do pokemon"
          required
        />
        <input
          defaultValue={props.imageURL}
          name="imagePokemon"
          placeholder="Link da imagem do pokemon"
          required
        />
        <button type="submit">Atualizar</button>
      </form>
    </ContainerEditCard>
  );
}
