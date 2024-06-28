// App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnalyticsPage from "./components/AnalyticsPage";
import Dashboard from "./components/Dashboard";
import AuthCallback from "./components/AuthCallback";
import Login from "./components/Login/Login.tsx";
import DockerLogs from "./components/DockerLogs.tsx";
import Settings from "./components/Settings.tsx";
import "./App.css";
import Environment from "./components/Environment/Environment.tsx";
import Containers from "./components/Containers/Containers.tsx";
import OneContainer from "./components/One Container/OneContainer.tsx";
import ContainerWrapper from "./components/ContainerDashboard/ContainerWrapper.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/env/:repoId" element={<Environment />} />
        <Route path="/analytics/:containerId" element={<AnalyticsPage />} />
        <Route path="/containers/" element={<Containers />} />
        <Route path="/containers/:id" element={<OneContainer />} />
        <Route path="/containers/:id/container/*" element={<ContainerWrapper />} />
        <Route path="/logs/:containerId" element={<DockerLogs />} />
        <Route path="/settings/:containerId" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
