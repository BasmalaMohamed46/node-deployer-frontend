import axios from "axios";
import { Repo } from "../components/interfaces/repo.interface";

const baseUrl = "http://localhost:3000";

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
