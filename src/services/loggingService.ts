import axios from 'axios';

export interface LogEntry {
  timestamp: string;
  level: 'info' | 'error' | 'warning';
  message: string;
}

export const fetchLogs = async (containerId: string): Promise<LogEntry[]> => {
  try {
    const response = await axios.get(`http://localhost:3000/deploy/container/logs/${containerId}`);
    return response.data.logs;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
  }
};