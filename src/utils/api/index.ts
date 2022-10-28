import axios from "axios";
import swal from "sweetalert";
import { Pokemon } from "../types/pokemon.type";

axios.defaults.baseURL = "https://api-pokedex-nest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const defaultURL = "https://api-pokedex-nest.herokuapp.com";

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: "warning",
    timer: 5000,
  });
}

function handleSuccess(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: "success",
    timer: 5000,
  });
}

const api = {
  getPokemons: async (): Promise<Pokemon[] | undefined> => {
    try {
      const pokemons = await axios.get(defaultURL + "/pokemons");

      return pokemons.data;
    } catch (err: any) {
      handleError("Erro no servidor!", "Erro no servidor , tente novamente!");
    }
  },

  createPokemon: async (pokemon: Pokemon): Promise<Pokemon | undefined> => {
    try {
      const newPokemon = await axios.post("/pokemons", pokemon);
      handleSuccess("Sucesso!", "Pokemon criado.");
      return newPokemon.data;
    } catch (err: any) {
      handleError("Erro ao criar o pokemon", err.message);
    }
  },

  getOnePokemon: async (
    id: string | undefined
  ): Promise<Pokemon | undefined> => {
    try {
      const pokemon = await axios.get("/pokemons/" + id);
      return pokemon.data;
    } catch (err: any) {
      handleError("Erro no servidor!", "Erro no servidor , tente novamente!");
    }
  },

  updatePokemon: async (pokemon: Pokemon): Promise<Pokemon | undefined> => {
    try {
      const updatedPokemon = await axios.patch(
        "pokemons/" + pokemon.id,
        pokemon
      );
      handleSuccess("Sucesso!", "Pokemon atualizado.");
      return updatedPokemon.data;
    } catch (err: any) {
      handleError("Erro ao atualizar pokemon", err.response.data.message[0]);
    }
  },

  deletePokemon: async (id: string | undefined): Promise<boolean | any> => {
    try {
      const isDeleted = await axios.delete("/pokemons/" + id);
      handleSuccess("Sucesso!", "Pokemon deletado.");
    } catch (err: any) {
      handleError("Erro ao deletar pokemon", err.message);
    }
  },
};

export default api;
