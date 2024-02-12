import axios from "axios";

export const makeReq = axios.create({
  baseURL: "https://lasienne-backendd.onrender.com/api"
});
