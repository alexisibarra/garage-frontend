import axios from "axios";
import { ENV } from "../../env";

const baseURL = ENV.API_URL;

const AXIOS = axios.create({
  baseURL,
  timeout: 100000,
});

export default AXIOS;
