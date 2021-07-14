import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import axios from 'axios';
import './Login.css'
import { Link } from 'react-router-dom';

function Login(props: RouteComponentProps) {
    const [UserName, setUserName] = useState("")
    const [PassWord, setPassWord] = useState("")

    const handleUser = (e: any) => {
        setUserName(e.target.value)
    }
    const handlePass = (e: any) => {
        setPassWord(e.target.value)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post('http://localhost:1337/auth/local', {
            identifier: UserName,
            password: PassWord
        })
            .then(res => {
                console.log(res);
                localStorage.setItem("JWT", res.data.jwt)
                localStorage.setItem("Uid", res.data.user.id)
                props.history.push("./")
            });
    }
    return (
        <div className="Login">
            <div className="container">
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div className="LoginBox">
                            <h2 className="w-100 text-center"> به فیک استور خوش اومدی</h2>
                            <form onSubmit={handleSubmit} className="w-75">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">نام کاربری</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username" name="username"
                                        onChange={handleUser}
                                        value={UserName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">رمز عبور</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name="password"
                                        onChange={handlePass}
                                        value={PassWord} />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-warning">ورود</button>
                                </div>
                            </form>
                            <div className="m-2">
                                <span>هنوز ثبت نام نکرده اید ؟</span><Link to="/Register">ثبت نام کنید</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
