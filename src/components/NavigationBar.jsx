import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isHoverable, setIsHoverable] = useState(true);
  const [isClosed, setIsClosed] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const userId = useSelector((state) => state.login.userId);
  const userName = useSelector((state) => state.login.userName);

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

  // Function to handle keyboard events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSidebar();
    }
  };

  return (
    <>
      <nav className={`sidebar ${isLocked ? 'locked' : ''} ${isClosed ? 'close' : ''}`} onMouseLeave={hideSidebar} onMouseEnter={showSidebar}>
        <div className="logo_items flex">
          <span className="nav_image">
            <i className="bx bxl-airbnb bx-lg" color="orange" />
          </span>
          <span className="logo_name">AirBnB</span>
          {isHovering && (
          <button type="button" aria-label="Unlock Sidebar" className={`bx ${isLocked ? ' bx-md bx-lock-open-alt' : 'bx-md bx-lock-alt'} no-style-button`} onClick={toggleLock} title="Unlock Sidebar" />
          )}
          <button type="button" aria-label="Close Sidebar" className="no-style-button bx bx-x bx-md" onClick={toggleSidebar} />
        </div>

        <div className="menu_container">
          <div className="menu_items">
            <ul className="menu_item">
              <li className="item">
                <Nav.Link className="link flex capital-text" as={NavLink} to="/" onClick={toggleSidebar}>
                  <i className="bx bx-sm bxs-building-house" />
                  {' '}
                  PLACES
                </Nav.Link>
              </li>
              <li className="item">
                <Nav.Link className="link flex capital-text" as={NavLink} to="/reserve" onClick={toggleSidebar}>
                  <i className="bx bx-sm bx-calendar-check bx-tada" />
                  {' '}
                  RESERVE
                </Nav.Link>
              </li>
              <li className="item">
                <Nav.Link className="link flex capital-text" as={NavLink} to="/myreservations" onClick={toggleSidebar}>
                  <i className="bx bx-sm bx-list-check" />
                  {' '}
                  MY RESERVATIONS
                </Nav.Link>
              </li>
              <li className="item">
                <Nav.Link className="link flex capital-text" as={NavLink} to="/deleteplace" onClick={toggleSidebar}>
                  <i className="bx bx-sm bx-bookmark-minus" />
                  {' '}
                  DELETE PLACE
                </Nav.Link>
              </li>
              <li className="item">
                <Nav.Link className="link flex capital-text" as={NavLink} to="/addplace" onClick={toggleSidebar}>
                  <i className="bx bx-sm bx-location-plus" />
                  {' '}
                  ADD PLACE
                </Nav.Link>
              </li>
              <li className="item">
                <Nav.Link className="link flex capital-text" as={NavLink} to="/login" onClick={toggleSidebar}>
                  <i className="bx bx-sm bx-log-in" />
                  {' '}
                  LOG IN
                </Nav.Link>
              </li>
            </ul>
          </div>

          <div className="sidebar_profile flex">
            <span className="nav_image">
              <i className="bx bx-sm bxs-user-circle" />
            </span>
            <div className="name capital-text">
              {userId ? (
                <>{userName}</>
              ) : (
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isNavbarVisible && (
      <nav className="navbar flex">
        <button type="button" aria-label="Hamburger" className="no-style-button bx bx-md bx-menu ms-3" onClick={toggleSidebar} onKeyDown={handleKeyDown} />
      </nav>
      )}
    </>
  );
};

export default NavigationBar;
