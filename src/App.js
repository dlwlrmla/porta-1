import { Container } from 'react-bootstrap';
import Navbar from './components/nav/Navbar';
import Tecnologias from './pages/Tecnologias';
import { Routes, Route } from "react-router-dom"
import './App.css';




function App() {
  return (
    <>
    <Navbar/>
    <Container >  
      <Routes>
        <Route index element={<Tecnologias/>} />
        {/* <Route path="/Proyectos" element={}/>
        <Route path="/Proyectos" element={}/> */}
      </Routes>
    </Container>

    </>

  );
}

export default App;
