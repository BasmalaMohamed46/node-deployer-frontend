import axios from "axios";
import { Repo } from "../interfaces/repo.interface";

// WARN: add the VITE_BACK_END_URL = 'localhost:3000' in the .env file
const baseUrl = import.meta.env.VITE_BACK_END_URL;

export const getRepos = async (): Promise<Repo[]> => {
  try {
    const response = await axios.get(`${baseUrl}/deploy/container`);

    const fetchedData: Repo[] = response.data || [];
    return fetchedData;
  } catch (error) {
    console.error("Error fetching containers:", error);
    throw error;
  }
};
