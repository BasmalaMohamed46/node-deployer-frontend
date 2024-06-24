import axios from "axios";
import { Container } from "../components/interfaces/container.interface";

const baseUrl = "http://localhost:3000";

export const getContainers = async (): Promise<Container[]> => {
  try {
    const response = await axios.get(`${baseUrl}/deploy/container`);

    const fetchedData: Container[] = response.data || [];
    return fetchedData;
  } catch (error) {
    console.error("Error fetching containers:", error);
    throw error;
  }
};
