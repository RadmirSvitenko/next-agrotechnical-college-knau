import axios from "axios";

export const API = axios.create({
  baseURL: "https://asanabdi.pythonanywhere.com/api/v1/"
})