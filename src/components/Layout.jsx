import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Layout = () => (
  <>
    <NavigationBar />
    <Outlet />
  </>
);

export default Layout;
