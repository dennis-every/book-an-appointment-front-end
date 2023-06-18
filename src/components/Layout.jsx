import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom';
import '../styles/layout.css';

const Layout = () => {
  return (
    <div className='d-flex custom-margin' >
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default Layout