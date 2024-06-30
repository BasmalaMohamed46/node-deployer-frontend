// import axios from 'axios';
import { axiosInstance } from '../interceptors/auth.interceptor';

export interface LogEntry {
  timestamp: string;
  level: 'info' | 'error' | 'warning';
  message: string;
}

export const fetchLogs = async (containerId: string): Promise<LogEntry[]> => {
  try {
    const response = await axiosInstance.get(`/deploy/container/logs/${containerId}`);
    return response.data.logs;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
  }
};
