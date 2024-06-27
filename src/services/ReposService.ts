import { axiosInstance } from "../interceptors/auth.interceptor";
import { Repo } from "../interfaces/repo.interface";

export const getRepos = async (): Promise<Repo[]> => {
  try {
    const response = await axiosInstance.get(`deploy/container`);
    const fetchedData: Repo[] = response.data || [];
    return fetchedData;
  } catch (error) {
    console.error("Error fetching containers:", error);
    throw error;
  }
};
