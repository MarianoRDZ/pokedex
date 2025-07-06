import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_POKEMON_API,
});

export default API;
