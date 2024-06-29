// App.tsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnalyticsPage from "./components/AnalyticsPage";
import Dashboard from "./components/Dashboard";
import AuthCallback from "./components/AuthCallback";
import Login from "./components/Login/Login.tsx";
import Event from "./components/Event.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/login", "/signup"]} component={Login} />
        <Route path="/auth/callback" component={AuthCallback} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/analytics/:containerId" component={AnalyticsPage} />
        <Route path="/event" component={Event} />
      </Switch>
    </Router>
  );
}

export default App;
