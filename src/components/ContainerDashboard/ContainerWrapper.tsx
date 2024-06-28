import { Route, Routes } from 'react-router-dom';
import ContainerDashboardSidebar from './ContainerDashboardSidebar';
import Logo from '../Logo/Logo';
import Containers from '../Containers/Containers';
import { ReactNode } from 'react';

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
      path: "logo",
      element: <Logo />
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
