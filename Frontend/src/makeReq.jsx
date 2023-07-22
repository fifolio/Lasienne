import axios from "axios";

export const makeReq = axios.create({
  baseURL: "http://localhost:1337/api"
});