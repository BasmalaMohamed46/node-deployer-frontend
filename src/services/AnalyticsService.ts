import axios from 'axios';

interface AnalyticsData {
  _time: string;
  cpuUsage?: number;
  memoryUsage?: number;
}

const getAnalyticsData = async (containerId: string, interval: string): Promise<AnalyticsData[]> => {
  try {

    const baseUrl = import.meta.env.VITE_BACK_END_URL;
    const response = await axios.get(`${baseUrl}/analytics/usage`, {
      params: {
        containerId,
        interval,
      },
    });

    // Assuming response.data is an array of objects from your backend
    const fetchedData: any[] = response.data || [];

    // Map and filter data
    const mappedData: AnalyticsData[] = fetchedData.map((entry: any) => ({
      _time: entry._time,
      cpuUsage: entry._field === 'cpuUsage' ? entry._value : undefined,
      memoryUsage: entry._field === 'memoryUsage' ? entry._value : undefined,
    }));

    // Combine data entries with the same timestamp
    const combinedData: { [key: string]: AnalyticsData } = {};
    mappedData.forEach((entry: AnalyticsData) => {
      const key = entry._time;
      if (!combinedData[key]) {
        combinedData[key] = { _time: entry._time };
      }
      if (entry.cpuUsage !== undefined) {
        combinedData[key].cpuUsage = entry.cpuUsage;
      }
      if (entry.memoryUsage !== undefined) {
        combinedData[key].memoryUsage = entry.memoryUsage;
      }
    });

    return Object.values(combinedData);
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error; 
  }
};

export default getAnalyticsData;
