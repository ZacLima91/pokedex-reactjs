import axios from "axios";
const api = axios.create({
  baseURL: "https://api-pokedex-nest.herokuapp.com",
});

export default api;
