// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalyticsPage from './components/AnalyticsPage';
import Dashboard from './components/Dashboard';
import AuthCallback from './components/AuthCallback';
import Login from './components/Login/Login.tsx';
import './App.css';
import Environment from './components/Environment/Environment.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/env/:repoId" element={<Environment repoId={''} />} />
        <Route path="/analytics/:containerId" element={<AnalyticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
