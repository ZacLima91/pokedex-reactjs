import { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditModalPokemon } from "../../components/modals/EditModalPokemon";
import api from "../../utils/api";
import { Pokemon } from "../../utils/types/pokemon.type";
import { PokemonDetails } from "./style";
import swal from "sweetalert";

export const GetByPokemon = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    const response = await api.getOnePokemon(id);
    setPokemon(response);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClickEdit: MouseEventHandler<HTMLSpanElement> = () => {
    setOpenEditModal(!openEditModal);
  };

  const handleClickDelete: MouseEventHandler<HTMLSpanElement> = () => {
    swal({
      title: "Deletar Pokemon",
      text: `Tem certeza que deseja apagar ${pokemon?.name}`,
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        res = await api.deletePokemon(id);
        navigate("/");
      }
    });
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
        <button onClick={handleClickEdit} className="button-edit">
          Editar
        </button>

        <button onClick={handleClickDelete} className="button-delete">
          Deletar
        </button>
      </div>
      {openEditModal && (
        <EditModalPokemon
          getPokemon={getPokemon}
          handleClick={handleClickEdit}
          name={pokemon?.name}
          description={pokemon?.description}
          type={pokemon?.type}
          height={pokemon?.height}
          weight={pokemon?.weight}
          imageURL={pokemon?.imageURL}
        />
      )}
    </PokemonDetails>
  );
};
