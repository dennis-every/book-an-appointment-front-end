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
  const userId = useSelector((state) => state.users.userId);
  const userName = useSelector((state) => state.users.userName);

  const getLoginLink = (userId) => {
    if (userId) {
      return { href: '/', icon: 'bx-sm bx-log-out', text: 'LOG OUT' };
    }
    return { to: '/login', icon: 'bx-sm bx-log-in', text: 'LOG IN' };
  };

  const navLinks = [
    { to: '/', icon: 'bx-sm bxs-building-house', text: 'PLACES' },
    { to: '/reserve', icon: 'bx-sm bx-calendar-check bx-tada', text: 'RESERVE' },
    { to: '/myreservations', icon: 'bx-sm bx-list-check', text: 'MY RESERVATIONS' },
    { to: '/deleteplace', icon: 'bx-sm bx-bookmark-minus', text: 'DELETE PLACE' },
    { to: '/addplace', icon: 'bx-sm bx-location-plus', text: 'ADD PLACE' },
    getLoginLink(userId),
  ];

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
              {navLinks.map((link) => (
                <li className="item" key={link.to || link.href}>
                  {link.href ? (
                    <Nav.Link className="link flex capital-text" href={link.href} onClick={toggleSidebar}>
                      <i className={`bx ${link.icon}`} />
                      {' '}
                      {link.text}
                    </Nav.Link>
                  ) : (
                    <Nav.Link className="link flex capital-text" as={NavLink} to={link.to} onClick={toggleSidebar}>
                      <i className={`bx ${link.icon}`} />
                      {' '}
                      {link.text}
                    </Nav.Link>
                  )}
                </li>
              ))}
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
                <>Guest</>
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
