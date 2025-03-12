import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // URL do backend
});



export default api;
