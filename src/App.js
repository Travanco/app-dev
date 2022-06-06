import './App.css';
import './weather.css'
import desMoines from './images/DesMoines.jpg';
import menu from './images/bars-solid.png';
import guide from './images/75guideone.png';
import { Accordion, Col, ListGroup, ListGroupItem, Nav, NavDropdown, Row } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'; 
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,FormControl } from 'react-bootstrap';
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Card from 'react-bootstrap/Card';



function App() {
  const [data,setData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.619549&lon=-93.598022&units=imperial&appid='+process.env.REACT_APP_Weather_API_KEY;
  let count = 0;
  const retriveInfo = () =>{
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    })
  }
  useEffect(() =>{
   if(count == 0){
     
     retriveInfo();
     count++;
   }  
  })

  return (
    <div className="App">
    <Navbar bg="primary" variant="dark">
    <Container>
    
    <Navbar.Brand href="#home"><Button onClick={handleShow}><img src={menu} className='menu-button'></img></Button>GuideHome</Navbar.Brand>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
          <Accordion.Header>About us</Accordion.Header>
          <Accordion.Body>
            <ListGroup variant='flush'>
              <ListGroupItem action href="links">Company Background </ListGroupItem>
              <ListGroupItem action href="links">Employee Handbook </ListGroupItem>
              <ListGroupItem action href="links">GuideOne Foundation </ListGroupItem>
            </ListGroup>
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <AccordionHeader>Business Tools</AccordionHeader>
            <Accordion.Body>
              <ListGroup variant='flush'>
                <ListGroupItem action href="links">Commercial Lines</ListGroupItem>
                <ListGroupItem action href="links">FM Interact/Systems</ListGroupItem>
                <ListGroupItem action href="links">GuideLink</ListGroupItem>
                <ListGroupItem action href="links">GuideShare</ListGroupItem>
                <ListGroupItem action href="links">PMO Jira Dashboard</ListGroupItem>
                <ListGroupItem action href="links">SharePoint</ListGroupItem>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Emergencies</Accordion.Header>
            <Accordion.Body>
            <ListGroup variant='flush'>
                <ListGroupItem action href="link1">Biohazads</ListGroupItem>
                <ListGroupItem action href="link2">Bomb Threat</ListGroupItem>
                <ListGroupItem action href="link3">Emergiencies - Home</ListGroupItem>
                <ListGroupItem action href="link4">Evacuations</ListGroupItem>
                <ListGroupItem action href="link5">Maps</ListGroupItem>
                <ListGroupItem action href="link6">Violence </ListGroupItem>
                <ListGroupItem action href="link7">Weather </ListGroupItem>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Guidelines/Policies</Accordion.Header>
            <Accordion.Body>
            <ListGroup variant='flush'>
                <ListGroupItem action href="link1">Company - Employee Handbook</ListGroupItem>
                <ListGroupItem action href="link2">Accepting Legal Papers</ListGroupItem>
                <ListGroupItem action href="link3">Contract Review</ListGroupItem>
                <ListGroupItem action href="link4">Electrical Appliances</ListGroupItem>
                <ListGroupItem action href="link5">Information Technology</ListGroupItem>
                <ListGroupItem action href="link6">Meeting Guidelines  </ListGroupItem>
                <ListGroupItem action href="link7">Retention </ListGroupItem>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Health</Accordion.Header>
            <Accordion.Body>
            <ListGroup variant='flush'>
                <ListGroupItem action href="link1">Wellness</ListGroupItem>
                
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>

        </Offcanvas.Body>
      </Offcanvas>
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
  <Container>
    <Row>
    <Col>
  <div style={{ display: 'block', width: 700, padding: 30}}>
      
      <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={desMoines}
            alt="Image One"
          />
          <Carousel.Caption>
            <div className="name">
            <h2>{data.name}</h2>
            {data.main ? <h2>{data.main.temp.toFixed()}°F</h2>: null}
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p>:null}   
            </div> 
            
            {data.main ? <p>Feels Like: {data.main.feels_like.toFixed()}°F</p>:null}
            {data.main ? <p>Humidity: {data.main.humidity}%</p>:null}
            {data.wind ? <p>Windspeed: {data.wind.speed.toFixed()} mph</p>:null}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
       

      </Carousel>
      
    </div>
    </Col>
    <Col>
    <Card>
  <Card.Header as="h5">Reminders and Alerts</Card.Header>
  <Card.Body>
    <Card.Title>For those still working in the home office at this time:</Card.Title>
    <Card.Text>
    Dave has been stocking the GuideOne Market with fresh box lunch options for only $2. Looking for a breakfast option? You can now purchase cinnamon rolls, bagels and cream cheese, jumbo muffins and more! Check back often to see what Dave has in stock.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
