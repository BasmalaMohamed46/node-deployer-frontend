import "./App.css";
import Dashboard from "./components/Dashboard";
import AuthCallback from "./components/AuthCallback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RechargePage from "./pages/RechargePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/recharge" component={RechargePage} />
        <Route path="/auth/callback" component={AuthCallback} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
