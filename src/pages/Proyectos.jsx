import React from 'react'
import Item from '../components/card/item/Item'
import bb from "../assets/bb.png"
import vipanel from "../assets/vipanel.png"
import autos from "../assets/autos.png"
import presupuesto from "../assets/presupuesto.png"

import { Container } from 'react-bootstrap'

const data = [{image:bb, read : "Hecho con react, se consume una api y cada vez que se clickea el boton aleatoriamente se le consulta a la api por la data y luego esta es desplegada de manera dinamica en el contenido .", link:'https://breaking-bad-random-phraser.netlify.app/'},
{
  image: vipanel, read:"proyecto de freelance, es una pagina para un pequeño emprendimiento que vende paneles, hecha con react, sin base de datos y con un formulario que lleva los datos directamente al correo del administrador de la pagina ." , link :"https://vipanel.cl/"
},
{
  image: autos, read : "Proyecto realizado con react, hooks y styled components, es una pequeña web app que trabaja la data recibida en el formulario y se entregan resultados segun se requiera", link:"https://cotizadordesegurosdeautosdlwlrmaa.netlify.app/"
},
{
  image: presupuesto, read : "pequeña app hecha con react y styled components, se calculan gastos a partir de un presupuesto especifico .", link :"https://presupuestosetterdlwlrmaa.netlify.app/"
}]

const Proyectos = () => {
  return (
    <>
      <Container style={{"textAlign":"center","marginTop":"3rem"}}>
        {
          data.map( (item, index) => (
            <>
            <h1 style={{"marginTop":"0rem", "marginBottom":"0"}}>{item.name}</h1>
            <Item img={item.image} link={item.link} key={index} style={{"width":"5rem","marginBottom":"0"}} data={item.read}/>

            </>
          ))
        }
      </Container>
    </>
  )
}

export default Proyectos