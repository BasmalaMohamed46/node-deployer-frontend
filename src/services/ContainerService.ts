import axios from "axios";
const baseUrl = "http://localhost:3000";

export const stopContainer = async (containerId: string): Promise<void> => {
  try {
    await axios.post(`${baseUrl}/deploy/container/stop/${containerId}`);
  } catch (error) {
    console.error("Error stopping container:", error);
    throw error;
  }
};

export const resumeContainer = async (containerId: string): Promise<void> => {
  try {
    await axios.post(`${baseUrl}/deploy/container/resume/${containerId}`);
  } catch (error) {
    console.error("Error resuming container:", error);
    throw error;
  }
};

export const redeploy = async (containerId: string): Promise<void> => {
  try {
    await axios.post(`${baseUrl}/deploy/container/restart/${containerId}`);
  } catch (error) {
    throw error;
  }
};

export const restartService = async (repoId: string): Promise<void> => {
  try {
    return await axios.post(`${baseUrl}/deploy/container/redeploy`, {
      repoId: repoId,
      userId: "667865ac43667afc84a06e63",
    });
  } catch (error) {
    throw error;
  }
};
