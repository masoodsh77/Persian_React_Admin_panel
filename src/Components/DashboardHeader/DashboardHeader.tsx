import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
import { Dropdown } from "react-bootstrap";
import { RouteComponentProps } from "react-router";

const DashboardHeader: any = (props: RouteComponentProps) => {
    const [name, setName] = useState('')
    useEffect(() => {
        if (localStorage.getItem('JWT') !== null) {
            axios.get(`http://localhost:1337/users/${localStorage.getItem('Uid')}`, {
                headers: {
                    Authorization:
                        `Bearer ${localStorage.getItem("JWT")}`,
                }
            })
                .then(res => {
                    setName(res.data.name)
                    console.log(res.data);

                })
        }
    })
    return (
        <div className="w-100 dashHeader">
            <div className="row">
                <div className="col-2 bg-warning h-100 text-dark p-3 text-center">فیک استور</div>
                <div className="col-10 h-100 pt-2 p-5 d-flex justify-content-end">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline" id="dropdown-basic">
                            {name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" className="text-center ">اطلاعات حساب شما</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className="text-center ">مدیریت</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3" className="text-center text-danger" 
                            onClick={() => {
                                localStorage.removeItem('JWT')
                                localStorage.removeItem('Uid')
                                props.history.push('/')
                            }}
                            >خروج</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}
export default DashboardHeader;