import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackend-production-2b47.up.railway.app/api"
});

export default API;
