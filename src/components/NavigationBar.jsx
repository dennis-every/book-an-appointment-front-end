import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const NavigationBar = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isHoverable, setIsHoverable] = useState(true);
  const [isClosed, setIsClosed] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Function to toggle the lock state of the sidebar
  const toggleLock = () => {
    setIsLocked(!isLocked);
    setIsHoverable(!isLocked);
  };
  
  // Function to hide the sidebar when the mouse leaves
  const hideSidebar = () => {
    setIsHovering(false);
    if (isHoverable) {
      setIsClosed(true);
    }
  };

  // Function to show the sidebar when the mouse enters
  const showSidebar = () => {
    setIsHovering(true);
    if (isHoverable) {
      setIsClosed(false);
    }
  };

  // Function to show and hide the sidebar
  const toggleSidebar = () => {
    setIsClosed(!isClosed);
    setIsNavbarVisible(!isNavbarVisible);
  };

  // If the window width is less than 800px, close the sidebar and remove hoverability and lock
  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsClosed(true);
      setIsLocked(false);
      setIsHoverable(false);
    }
  }, []);

  return (
    <>
      <nav className={`sidebar ${isLocked ? 'locked' : ''} ${isClosed ? 'close' : ''}`} onMouseLeave={hideSidebar} onMouseEnter={showSidebar}>
      <div className="logo_items flex">
        <span className="nav_image">
          <img src="images/logo.png" alt="logo_img" />
        </span>
        <span className="logo_name">AirBnB</span>
        {isHovering && (
          <i className={`bx ${isLocked ? 'bx-lock-open-alt' : 'bx-lock-alt'}`} onClick={toggleLock} title="Unlock Sidebar"></i>
        )}
        <i className="bx bx-x" onClick={toggleSidebar}></i>
      </div>

      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <Nav.Link className="link flex" as={NavLink} to="/"><i className="bx bx-home-alt"></i> Places</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex" as={NavLink} to="/reserve"><i className="bx bx-home-alt"></i> Reserve</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex" as={NavLink} to="/myreservations"><i className="bx bx-home-alt"></i> My Reservations</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex" as={NavLink} to="/deleteplace"><i className="bx bx-home-alt"></i> Delete Place</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex" as={NavLink} to="/addplace"><i className="bx bx-home-alt"></i> Add Place</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex" as={NavLink} to="/login"><i className="bx bx-home-alt"></i> Log In</Nav.Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_profile flex">
          <span className="nav_image">
            <img src="images/profile.jpg" alt="logo_img" />
          </span>
          <div className="d-flex flex-column data_text">
            <span className="name">Nilton Segura</span>
            <span className="email">nseguralu@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>

    {isNavbarVisible && (
      <nav className="navbar flex">
        <i className="bx bx-menu" onClick={toggleSidebar}></i>
      </nav>
    )}
    </>
  );
}

export default NavigationBar;