// App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalyticsPage from './components/AnalyticsPage';
import Dashboard from './components/Dashboard';
import AuthCallback from './components/AuthCallback';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import PricingPage from './pages/PricingPage.tsx';
import TeamPage from './pages/TeamPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import RechargePage from './pages/RechargePage';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Login from './components/Login/Login.tsx';
import DockerLogs from './components/DockerLogs.tsx';
import Settings from './components/Settings.tsx';
import Footer from './components/Footer';
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
        <div className="min-height">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />

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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
