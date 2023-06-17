import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='d-flex' >
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default Layout