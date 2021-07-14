import React, { useEffect, useState } from "react";
import './Header.css';
import Logo from '../../assets/img/logo_light-1.png'
import { InputGroup, Button, FormControl, Form } from 'react-bootstrap';
import { FaShoppingBasket, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import axios from "axios";

const Header: any = () => {
    const [name , setName]=useState(`ورود وعضویت`)
    const [Login , setLogin]=useState("/Login")
    useEffect(()=>{
        if(localStorage.getItem('JWT') !== null){
            axios.get(`http://localhost:1337/users/${localStorage.getItem('Uid')}`, {
                headers: {
                  Authorization:
                    `Bearer ${localStorage.getItem("JWT")}`,
                }})
                .then(res=>{
                    setName(res.data.name)
                    setLogin('/dashboard')
                })
        }
    })
    return (
        <div className="Header d-flex justify-content-between align-items-center p-5">
            <div><img src={Logo} alt="Logo" /></div>
            <div className="HeaderSearchBar">
                <InputGroup className="mb-3">
                    <Button variant="dark" id="button-addon1">
                        جستجو
                    </Button>
                    <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        placeholder="جستجو در بین محصولات"
                        className="HeaderSearchInput"
                    />
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select">
                            <option>دسته بندی</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </InputGroup>
            </div>
            <div className="d-flex justify-content-around align-items-center h-100">
                <div className="d-flex h-100 align-items-center m-2 HeaderIcon">
                    <FaShoppingBasket size="2.3rem" />
                </div>
                <Link to={Login}>
                    <div className="d-flex h-100 align-items-center m-2 HeaderIcon">
                        <FaUserAlt size="2rem" />
                        <span className="m-2">{name}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header