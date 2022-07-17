import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
import "./Navbar.css"




function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="d-flex-md justify-content-around">
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link href="/home">Tecnologias</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to="/Proyectos">
        <Nav.Link eventKey="link-1" to="/Proyectos">Proyectos</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/Contacto">
          <Nav.Link eventKey="link-2" to="/Proyectos">Contacto</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

const Navbar = () => {
  return (
    <div className="color">
      <TabsExample/>
    </div>
  )
}

export default Navbar
