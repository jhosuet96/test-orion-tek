import axios from "axios";

const API = axios.create({baseURL:"https://localhost:7133/"});
export default API;