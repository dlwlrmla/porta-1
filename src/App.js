import { Container } from 'react-bootstrap';
import Navbar from './components/nav/Navbar';
import Carrusel from "./components/carrusel/Carrusel"
import './App.css';




function App() {
  return (
    <>
    <Navbar/>
    <Container className="a">  

      <h1>HOLA UWU</h1>
      <Container className="carro">
        <Carrusel/>
      </Container>
    </Container>

    </>

  );
}

export default App;
