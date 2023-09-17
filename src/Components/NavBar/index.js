import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiMenuAltRight} from 'react-icons/bi'
import logo from '../../assets/logo.png'
import './index.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-nav" id="mainNav">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <BiMenuAltRight size={25} className='hambargor'/>
        </Navbar.Toggle>
       
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-link">
            <Nav.Link >Storie</Nav.Link>
            <Nav.Link href="#pricing">Loev</Nav.Link>
            <Nav.Link href="#pricing">One</Nav.Link>
            <Nav.Link href="#link">Superbike <span className='new'>new</span></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Book Now</Nav.Link>
            <Nav.Link href="#pricing">Book a Test Ride</Nav.Link>
            <Nav.Link href="#pricing">Book a Dealer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample
