import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true
});
