import './App.css';
import './weather.css'
import desMoines from './images/desmoines3.jpg';
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
import adp from './images/adp.png';
import bitbucket from './images/bitbucket.jpeg';
import confluence from './images/Confluence.png';
import outlook from './images/outlook.jpeg';
import webex from './images/webex.jpeg';
import jira from './images/jira.jpeg';
import news from './images/news.jpg';
import Toast from 'react-bootstrap/Toast';
import newsroom from './images/newsroom.jpeg';
import newsback from './images/news background.jpeg';


function App() {
  const [data,setData] = useState({});
  const [news,setNews] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.619549&lon=-93.598022&units=imperial&appid='+process.env.REACT_APP_Weather_API_KEY;
  const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+process.env.REACT_APP_News_API_KEY;
  let count = 0;
  const retriveInfo = () =>{
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    })
  }

  const retriveNews = () =>{
    axios.get(newsUrl).then((response) => {
      setNews(response.data);
      console.log(response.data);
    })
  }

  useEffect(() =>{
    retriveNews();
  },[])

  return (
    <div className="App">
    <Navbar bg="light" variant="light">
    <Container>
    
    <Navbar.Brand href="#home"><img src={guide}className='menu-logo'></img><img src={menu}className='menu-button' onClick={handleShow}></img>GuideHome</Navbar.Brand>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          
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
      <NavDropdown title="Employee Resources" id="tech-dropdown">
          <NavDropdown.Item href="#service-desk">Employee Service Desk</NavDropdown.Item>
          <NavDropdown.Item href="#My-hr">My Hr</NavDropdown.Item>
          <NavDropdown.Item href="#Guideone-store">GuideOne Store</NavDropdown.Item>
          <NavDropdown.Item href="#Bussiness-cards">Business Cards</NavDropdown.Item>
          <NavDropdown.Item href="#My-hr">My Hr</NavDropdown.Item>
          <NavDropdown.Item href="#Cat-Pay-Form">Cat Pay form</NavDropdown.Item>
          <NavDropdown.Item href="#managers-resources">Manager Resources Page</NavDropdown.Item>
          <NavDropdown.Item href="#gOneLegal">GuideOne Legal Website</NavDropdown.Item>
        </NavDropdown>
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
        <Button variant="secondary">Search</Button>
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
            <div className="weather-data">
            {data.name ? <h2>{data.name}</h2>: <h2>Des Moines</h2>}
            {data.main ? <h2>{data.main.temp.toFixed()}°F</h2>: <h2>70°F</h2>}         
            {data.weather ? <p>{data.weather[0].main}</p>: <p>Cloudy</p>}   
            {data.main ? <p>Feels Like: {data.main.feels_like.toFixed()}°F</p>: <p>Feels Like: 70F</p>}
            {data.main ? <p>Humidity: {data.main.humidity}%</p>: <p>Humidity: 70%</p>}
            {data.wind ? <p>Windspeed: {data.wind.speed.toFixed()} mph</p>: <p>Windspeed: 70 mph</p>}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img  
            className="d-block w-100"
            src={newsroom}
            alt="Image Two"
          ></img>

          <Carousel.Caption>
            <div className="news-data"></div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      
    </div>
    </Col>
    <Col>
    <div style={{padding: 30}}> 
    <Card>
  <Card.Header as="h5">Reminders and Alerts</Card.Header>
  <Card.Body>
    <Card.Title>For those still working in the home office at this time:</Card.Title>
    <Card.Text>
    Dave has been stocking the GuideOne Market with fresh box lunch options for only $2. Looking for a breakfast option? You can now purchase cinnamon rolls, bagels and cream cheese, jumbo muffins and more! Check back often to see what Dave has in stock.
    </Card.Text>
 
  </Card.Body>
  </Card>
  </div>
    </Col>
    </Row>
    <Row> 
    <Col>
    <div className='main-dashboard'>
    <div className='dashboard-header'>
    <h1>My Apps</h1>
    </div>
    <div className='dashboard-body' >
    <Row>
      <Col>
        <Card style={{ width: '155px' }}>
          <Card.Img variant="top" src={adp} style={{height:150, width:150}}/>
          <Card.Body>
            <Card.Title>ADP</Card.Title>
            <Button variant="outline-primary">Launch</Button>
          </Card.Body>
        </Card>

        <Col>
        <br></br>
        <Card style={{ width: '155px'}}>
          <Card.Img variant="top" src={outlook} style={{height:150, width:150}}/>
          <Card.Body>
          <Card.Title>Outlook</Card.Title> 
          <Button variant="outline-primary">Launch</Button>
          </Card.Body>
        </Card>
      </Col>
      </Col>
      <Col>
        <Card style={{ width: '155px' }}>
          <Card.Img variant="top" src={webex} style={{height:150, width:150}}/>
          <Card.Body>
          <Card.Title>Webex</Card.Title> 
          <Button variant="outline-primary">Launch</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '155px' }}>
          <Card.Img variant="top" src={bitbucket} style={{height:150, width:150}}/>
          <Card.Body>
          <Card.Title>BitBucket</Card.Title> 
          <Button variant="outline-primary">Launch</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '155px' }}>
          <Card.Img variant="top" src={confluence} style={{height:150, width:150}}/>
          <Card.Body>
          <Card.Title>Confluence</Card.Title> 
          <Button variant="outline-primary">Launch</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '155px' }}>
          <Card.Img variant="top" src={jira} style={{height:150, width:150}}/>
          <Card.Body>
          <Card.Title>Jira</Card.Title> 
          <Button variant="outline-primary">Launch</Button>
          </Card.Body>
        </Card>
        
      </Col>
    </Row>
    
    </div>
    </div>
    </Col>  
    </Row> 
    </Container>
    </div>
  );
}

export default App;
