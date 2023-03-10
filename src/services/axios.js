import axios from "axios";
import { API_URL, TOKEN } from "../constants/config";
export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: TOKEN,
  },
});
