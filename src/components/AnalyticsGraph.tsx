// AnalyticsGraph.tsx
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import getAnalyticsData from '../services/AnalyticsService'; 

interface AnalyticsGraphProps {
  containerId: string;
  interval: string;
}

interface AnalyticsData {
  _time: string;
  cpuUsage?: number;
  memoryUsage?: number;
}

const AnalyticsGraph: React.FC<AnalyticsGraphProps> = ({ containerId, interval }) => {
  const [data, setData] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const analyticsData = await getAnalyticsData(containerId, interval);
        setData(analyticsData);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        // Handle error state as needed
      }
    };

    fetchAnalyticsData();
  }, [containerId, interval]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>CPU Usage</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cpuUsage" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="col-md-6">
          <h3>Memory Usage</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="memoryUsage" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsGraph;
