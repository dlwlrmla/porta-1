import Nav from 'react-bootstrap/Nav';
import "./Navbar.css"

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="d-flex justify-content-around">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
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
