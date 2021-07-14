import React from "react";
import { Col, Container , Row } from "react-bootstrap";
import Category from './Category/Category'

const Slider:any = () =>{
    return(
        <div className="pt-3">
        <Container>
            <Row>
                <Col xs={3}><Category/></Col>
                <Col xs={9}>s</Col>
            </Row>
        </Container>
        </div>
    )
}
export default Slider;