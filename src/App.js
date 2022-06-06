import './App.css';
import { Nav, NavDropdown, Row } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'; 
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,FormControl } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
    <Navbar bg="primary" variant="dark">
    <Container>
    
    <Navbar.Brand href="#home">GuideHome</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#directory">Directories</Nav.Link>
      
      <NavDropdown title="Tech Services" id="tech-dropdown">
          <NavDropdown.Item href="#tech-reset">Reset Password</NavDropdown.Item>
          <NavDropdown.Item href="#Submit-ticket">Submit a Ticket</NavDropdown.Item>
          <NavDropdown.Item href="#System-status">System Status Page</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#tech-help">Tech helps</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="#feedback">Feedback</Nav.Link>
      
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
  <div style={{ display: 'block', width: 700, padding: 30}}>
      
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="htps://media.geeksntent/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default App;
