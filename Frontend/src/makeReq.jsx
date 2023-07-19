import axios from "axios";

export const makeReq = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
  },
});