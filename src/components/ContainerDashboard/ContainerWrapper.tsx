import { Route, Routes } from 'react-router-dom';
import ContainerDashboardSidebar from './ContainerDashboardSidebar';
import Containers from '../Containers/Containers';
import { ReactNode } from 'react';
import DockerLogs from '../DockerLogs';
import Environment from '../Environment/Environment';
import AnalyticsPage from '../AnalyticsPage';
import Settings from '../Settings';
import NotFound from '../NotFound';
import Event from '../Event';

export default function ContainerWrapper() {

  type routesType = {
    path: string,
    element: ReactNode
  }

  // TODO: add your pathes and elements here
  // TODO: remove unnecessary imports and routes
  const routes: routesType[] = [
    {
      path: "login",
      element: <Containers />
    },
    {
      path: "logs",
      element: <DockerLogs />
    },
    {
      path: "environment",
      element: <Environment />
    },
    {
      path: "analytics",
      element: <AnalyticsPage />
    },
    {
      path: "settings",
      element: <Settings />
    },
    {
      path: "events",
      element: <Event />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
  return (
    <div className="row">
      <div className="col-2">
        <ContainerDashboardSidebar />
      </div>
      <div className="col-10">
        <Routes>
          {routes.map((route, index) => {
            return <Route {...route} key={index} />
          })}
        </Routes>
      </div>
    </div>
  );
}
