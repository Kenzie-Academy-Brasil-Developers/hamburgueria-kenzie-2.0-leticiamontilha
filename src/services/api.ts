import axios from "axios";

const api = axios.create({
  baseURL: "hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 5000,
});

export default api;