import React from 'react'
import { Container } from 'react-bootstrap'

const Content = ({index}) => {
    if(index === 0){
        return (
            <>
            <Container style={{"textAlign":"center"}} >
                <h1>JavaScript</h1>
                <p className="font">Aprendi javaScript hace ya mas de dos años. Domino todo lo basico, tipos de datos, operadores, bucles, funciones, funciones asincronicas, clases, DOM, coneccione a base de datos y manejo de frameworks .  </p>

            </Container>

            </>
        )
    }else if (index === 1 ){
        return(
            <>
            <Container style={{"textAlign":"center"}}>
                <h1>HTML</h1>
                <p className="font">Mi manejo de html es el suficiente para poder construir lo que se me venga en mente, no lo domino al 100% pero aprendo cada cosa que sea necesario para avanzar .</p>

            </Container>

            </>
        )
    }else{
        return (
            <>
            <Container style={{"textAlign":"center"}}>
                <h1>CSS</h1>
                <p className="font">Mi relacion con css es agridulce, lo uso lo menos posible pero hay veces en las que se me pasa el tiempo volando probando con las miles de formas que hay de lograr un mismo resultado</p>
            </Container>

            </>
        )
    }
}

export default Content