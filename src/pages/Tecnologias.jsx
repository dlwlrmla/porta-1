import { Card, Container } from "react-bootstrap";
import { useState } from "react";
import Carrusel from "../components/carrusel/Carrusel";
import Content from "../components/carrusel/Content";
import Tool from "../components/card/Tool";

const Tecnologias = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container className="carro">
      <h1>Presentacion</h1>

      </Container>
      <Container className="carro">
        <Carrusel
          index={index}
          setIndex={setIndex}
          handleSelect={handleSelect}
        />
      </Container>
      <Container className="center" style={{ "marginTop": "4rem" }}>
        <Content index={index} />
        <Tool/>
      </Container>
    </>
  );
};

export default Tecnologias;
