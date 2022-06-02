import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_POKEMONS_INC_MERN_API_URL
});

export default axiosInstance;