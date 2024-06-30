import React, { useEffect, useState } from 'react';
import '../styles/DockerLogs.css';
import { LogEntry, fetchLogs } from '../services/loggingService';
import { useParams } from 'react-router-dom';

const DockerLogs: React.FC = () => {
  const { id: containerId } = useParams();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogsData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (containerId) {
          const logsData = await fetchLogs(containerId);
          
          setLogs(logsData);
        }
      } catch (error) {
        setError('Failed to fetch logs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLogsData();
  }, [containerId]);

  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h5 className="card-title">Docker Container Logs: {containerId}</h5>
        </div>
        <div className="card-body logs-container">
          {loading ? (
            <div className="loading">Loading logs...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className={`log-entry ${log.level} mb-2 p-2 rounded`}>
                <span className="log-timestamp">{log.timestamp}</span>
                <span className="log-message ml-2">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DockerLogs;
