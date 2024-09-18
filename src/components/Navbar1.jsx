import { Button, ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='fw-bold fs-1 text-primary' href="#home">Trendz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className='d'>
              <NavDropdown.Item href="#action/3.1">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women's clothiing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
             Jwellery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Electonics</NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <ButtonGroup aria-label="Basic example" className='ms-auto'>
      <Button variant="secondary">Login</Button>
      <Button variant="secondary"
       className='ms-3'>SignUp</Button>
    </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;