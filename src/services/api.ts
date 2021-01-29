import axios from "axios";
import { ENV } from "../../env";

export const API_BASE = ENV.API_URL || "";

export const getAllCars = async () => await axios.get(API_BASE);
