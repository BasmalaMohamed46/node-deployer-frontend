import { Repo } from "../components/interfaces/repo.interface";
import { axiosInstance } from "../interceptors/auth.interceptor";

const baseUrl = "http://localhost:3000";

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
