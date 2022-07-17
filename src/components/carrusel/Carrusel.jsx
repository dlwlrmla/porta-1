import React, { useState } from 'react';
import "./Carrusel.css"
import Carousel from 'react-bootstrap/Carousel';
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import html from "../../assets/html.png"

export default function Carrusel({index, setIndex, handleSelect}) {
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carro">
      <Carousel.Item className="">
        <img
          className="imagen"
          src={js}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="imagen"
          src={html}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="imagen"
          src={css}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

//render(<Carrusel/>)