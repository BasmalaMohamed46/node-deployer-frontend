// App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalyticsPage from './components/AnalyticsPage';
import Dashboard from './components/Dashboard';
import AuthCallback from './components/AuthCallback';
import LandingPage from './pages/LandingPage';
import RechargePage from './pages/RechargePage';
import Login from './components/Login/Login.tsx';
import DockerLogs from './components/DockerLogs.tsx';
import Settings from './components/Settings.tsx';
import './App.css';
import Environment from './components/Environment/Environment.tsx';
import Containers from './components/Containers/Containers.tsx';
import OneContainer from './components/One Container/OneContainer.tsx';
import NavBar from './components/Navbar.tsx';
import { AuthProvider } from './context/AuthContext.tsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/env/:repoId" element={<Environment />} />
          <Route path="/analytics/:containerId" element={<AnalyticsPage />} />
          <Route path="/containers/" element={<Containers />} />
          <Route path="/containers/:id/*" element={<OneContainer />} />
          <Route path="/logs/:containerId" element={<DockerLogs />} />
          <Route path="/settings/:containerId" element={<Settings />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
