
import { Repo } from "../components/interfaces/repo.interface";
import { axiosInstance } from "../interceptors/auth.interceptor";

// WARN: add the VITE_BACK_END_URL = 'localhost:3000' in the .env file
const baseUrl = import.meta.env.VITE_BACK_END_URL;

export const getRepos = async (): Promise<Repo[]> => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/deploy/container`);
    const fetchedData: Repo[] = response.data || [];
    return fetchedData;
  } catch (error) {
    console.error("Error fetching containers:", error);
    throw error;
  }
};
