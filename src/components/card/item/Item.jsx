import React from 'react'
import "./item.css"
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



const Item = ({img, data,link}) => {
  return (
    <div className=" item">
        <Row>
            <Col xs={4}>
                <img src={img} alt="imagen de framework" className="ajuste" style={{"width":"50%", "width" : link ? "90%" : "50%" }}/>
            </Col>
            <Col xs={8} className="ajuste">
                <h6>{data}</h6>
                {
                  link ? <a href={link}>enlace</a> : null
                }
            </Col>
        </Row>
    </div>
    
  )
}

export default Item