// import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const NavigationBar = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isHoverable, setIsHoverable] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Function to toggle the lock state of the sidebar
  const toggleLock = () => {
    setIsLocked(!isLocked);
    setIsHoverable(!isLocked);
  };
  
  // Function to hide the sidebar when the mouse leaves
  const hideSidebar = () => {
    if (isHoverable) {
      setIsClosed(true);
    }
  };

  // Function to show the sidebar when the mouse enters
  const showSidebar = () => {
    if (isHoverable) {
      setIsClosed(false);
    }
  };

  // Function to show and hide the sidebar
  const toggleSidebar = () => {
    setIsClosed(!isClosed);
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
        <span className="logo_name">CodingNepal</span>
        <i className={`bx ${isLocked ? 'bx-lock-open-alt' : 'bx-lock-alt'}`} onClick={toggleLock} title="Unlock Sidebar"></i>
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
              <a href="#" className="link flex">
                <i className="bx bx-home-alt"></i>
                <span>Overview</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-grid-alt"></i>
                <span>All Projects</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Editor</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bxs-magic-wand"></i>
                <span>Magic Build</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-folder"></i>
                <span>New Projects</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-cloud-upload"></i>
                <span>Upload New</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Setting</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-flag"></i>
                <span>Notice Board</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-award"></i>
                <span>Award</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar_profile flex">
          <span className="nav_image">
            <img src="images/profile.jpg" alt="logo_img" />
          </span>
          <div className="data_text">
            <span className="name">David Oliva</span>
            <span className="email">david@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>

    <nav className="navbar flex">
      <i className="bx bx-menu" onClick={toggleSidebar}></i>
    </nav>
    </>
  );
}

export default NavigationBar;