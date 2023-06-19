import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const userId = useSelector((state) => state.login.userId);
  const userName = useSelector((state) => state.login.userName);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">AirBnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Places</Nav.Link>
            <Nav.Link as={NavLink} to="/reserve">Reserve</Nav.Link>
            <Nav.Link as={NavLink} to="/myreservations">My Reservations</Nav.Link>
            <Nav.Link as={NavLink} to="/deleteplace">Delete Place</Nav.Link>
            <Nav.Link as={NavLink} to="/addplace">Add Place</Nav.Link>
            {userId ? (
              <>{userName}</>
            ) : (
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
