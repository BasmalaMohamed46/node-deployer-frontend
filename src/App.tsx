// App.tsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuthCallback from './components/AuthCallback';
import AnalyticsPage from './components/AnalyticsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth/callback" component={AuthCallback} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/analytics/:containerId" component={AnalyticsPage} />
      </Switch>
    </Router>
  );
}

export default App;
