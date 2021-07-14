import React from 'react'
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap'
import './Menu.css'
import { AiOutlineMenu } from 'react-icons/ai'

const Menu: any = () => {
    return (
        <div className="Menu d-flex align-items-center">
            <Container className="h-100">
                <Row className="h-100">
                    <Col sm={3} className="MenuCategory d-flex align-items-center justify-content-center">
                        <AiOutlineMenu /> دسته بندی محصولات
                    </Col>
                    <Col sm={9} className="d-flex align-items-center justify-content-end h-100">
                        <Navbar variant="light" className="h-100">
                            <Nav className="mr-auto h-100">
                                <Nav.Link 
                                className="MenuNavItems MenuNavItemsBorder h-100 d-flex align-items-center" 
                                href="#home"
                                >
                                    خانه
                                </Nav.Link>
                                <Nav.Link 
                                className="MenuNavItems MenuNavItemsBorder h-100 d-flex align-items-center" 
                                href="#features"
                                >
                                    فروشگاه
                                </Nav.Link>
                                <Nav.Link 
                                className="MenuNavItems MenuNavItemsBorder h-100 d-flex align-items-center" 
                                href="#features"
                                >
                                    پنل مدیریت
                                </Nav.Link>
                                <Nav.Link 
                                className="MenuNavItems h-100 d-flex align-items-center" 
                                href="#pricing"
                                >
                                    درباره ما
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Menu;