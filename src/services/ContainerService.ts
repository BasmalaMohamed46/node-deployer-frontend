import { axiosInstance } from "../interceptors/auth.interceptor";
const baseUrl = "http://localhost:3000";

export const stopContainer = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.post(`${baseUrl}/deploy/container/stop/${containerId}`);
  } catch (error) {
    console.error("Error stopping container:", error);
    throw error;
  }
};

export const resumeContainer = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.post(
      `${baseUrl}/deploy/container/resume/${containerId}`
    );
  } catch (error) {
    console.error("Error resuming container:", error);
    throw error;
  }
};

export const redeploy = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.post(
      `${baseUrl}/deploy/container/restart/${containerId}`
    );
  } catch (error) {
    throw error;
  }
};

export const restartService = async (repoId: string): Promise<void> => {
  try {
    return await axiosInstance.post(`${baseUrl}/deploy/container/redeploy`, {
      repoId: repoId,
    });
  } catch (error) {
    throw error;
  }
};
