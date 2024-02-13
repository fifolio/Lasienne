import axios from "axios";

export const makeReq = axios.create({
  baseURL: "https://lasienne-backend.onrender.com/api"
});
