import "./App.css";
import Dashboard from "./components/Dashboard";
import AuthCallback from "./components/AuthCallback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginButton from "./components/Login/LoginButton"
import Login from "./components/Login/Login.tsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/login', '/signup']} component={Login} />
        <Route path="/auth/callback" component={AuthCallback} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
