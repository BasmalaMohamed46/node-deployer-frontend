import { axiosInstance } from "../interceptors/auth.interceptor";

export const stopContainer = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.post(`deploy/container/stop/${containerId}`);
  } catch (error) {
    console.error("Error stopping container:", error);
    throw error;
  }
};

export const resumeContainer = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.post(`deploy/container/resume/${containerId}`);
  } catch (error) {
    console.error("Error resuming container:", error);
    throw error;
  }
};

export const redeploy = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.post(`deploy/container/restart/${containerId}`);
  } catch (error) {
    throw error;
  }
};

export const restartService = async (repoId: string): Promise<void> => {
  try {
    return await axiosInstance.post(`deploy/container/redeploy`, {
      repoId: repoId,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteContainer = async (containerId: string): Promise<void> => {
  try {
    await axiosInstance.delete(`deploy/container/${containerId}`);
  } catch (error) {
    console.error("Error deleting container:", error);
    throw error;
  }
};

