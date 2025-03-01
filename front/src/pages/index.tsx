import { Route, Routes } from 'react-router-dom';
import { Marketplace } from './marketplace';
import { Home } from './home';
import { Play } from './play';
import { Profile } from './profile';

const routes = [{ path: '/', Page: Home }, { path: '/marketplace', Page: Marketplace }, { path: '/play', Page: Play }, { path: '/profile', Page: Profile }];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };