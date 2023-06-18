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
          <i className={`bx ${isLocked ? ' bx-md bx-lock-open-alt' : 'bx-md bx-lock-alt'}`} onClick={toggleLock} title="Unlock Sidebar"></i>
        )}
        <i className="bx bx-x bx-md" onClick={toggleSidebar}></i>
      </div>

      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <li className="item">
              <Nav.Link className="link flex capital-text" as={NavLink} to="/" onClick={toggleSidebar} ><i className='bx bx-sm bxs-building-house' ></i> PLACES</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex capital-text" as={NavLink} to="/reserve" onClick={toggleSidebar} ><i className='bx bx-sm bx-calendar-check bx-tada' ></i> RESERVE</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex capital-text" as={NavLink} to="/myreservations" onClick={toggleSidebar} ><i className='bx bx-sm bx-list-check' ></i> MY RESERVATIONS</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex capital-text" as={NavLink} to="/deleteplace" onClick={toggleSidebar} ><i className='bx bx-sm bx-bookmark-minus' ></i> DELETE PLACE</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex capital-text" as={NavLink} to="/addplace" onClick={toggleSidebar} ><i className='bx bx-sm bx-location-plus' ></i> ADD PLACE</Nav.Link>
            </li>
            <li className="item">
              <Nav.Link className="link flex capital-text" as={NavLink} to="/login" onClick={toggleSidebar} ><i className='bx bx-sm bx-log-in' ></i> LOG IN</Nav.Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_profile flex">
          <span className="nav_image">
            <i className='bx bx-sm bxs-user-circle'></i>
          </span>
          <div className="d-flex flex-column data_text">
            <span className="name capital-text">Nilton</span>
          </div>
        </div>
      </div>
    </nav>

    {isNavbarVisible && (
      <nav className="navbar flex">
        <i className="bx bx-md bx-menu" onClick={toggleSidebar}></i>
      </nav>
    )}
    </>
  );
}

export default NavigationBar;