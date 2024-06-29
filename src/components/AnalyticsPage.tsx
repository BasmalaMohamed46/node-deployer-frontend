import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AnalyticsGraph from './AnalyticsGraph';

const AnalyticsPage: React.FC = () => {
  const { containerId } = useParams<{ containerId: string }>();
  const [interval, setInterval] = useState<string>('lastHour');

  const handleIntervalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInterval(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <label htmlFor="interval" className="form-label">Select Interval:</label>
          <select id="interval" className="form-select mb-3" value={interval} onChange={handleIntervalChange}>
            <option value="lastHour">Last Hour</option>
            <option value="lastDay">Last Day</option>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <AnalyticsGraph containerId={containerId} interval={interval} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
