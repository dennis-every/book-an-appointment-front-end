import { Outlet } from 'react-router-dom';
import '../styles/layout.css';
import NavigationBar from './NavigationBar';

const Layout = () => (
  <div className="d-flex custom-margin">
    <NavigationBar />
    <Outlet />
  </div>
);

export default Layout;
