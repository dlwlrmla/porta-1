import React from 'react'
import { Container } from 'react-bootstrap'
import image from "../../assets/image.png"
import Item from "./item/Item"
import mongo from "../../assets/mongo.png"


const data = [{image: image,name:"React", read:"Segundo framework que aprendi despues de angular a un nivel junior, domino manejo de APIs, componentes, routing, styled-components, typescript y sigo constantemente capacitandome con este framework ."},
{
  image:mongo,name:"Mongo", read:"Soy nuevo con bases de datos pero soy capaz de hacer CRUDs con mongo, firebase y SQL"
}]

const Tool = () => {



  return (
    <>
      <Container style={{"textAlign":"center","marginTop":"4rem"}}>
        {
          data.map( (item, index) => (
            <>
            <h1 style={{"marginTop":"1rem"}}>{item.name}</h1>
            <Item img={item.image} key={index} style={{"width":"5rem"}} data={item.read}/>

            </>
          ))
        }
      </Container>
    </>
  )
}

export default Tool