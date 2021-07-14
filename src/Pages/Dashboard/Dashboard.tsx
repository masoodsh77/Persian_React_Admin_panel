import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import ProductTable from '../../Components/ProductTable/ProductTable'
import './Dashboard.css'

function Dashboard(props: RouteComponentProps) {
    const [categorie, setCategorie] = useState(0)
    const [Product, setProduct] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:1337/categories/count", {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("JWT")}`,
            }
        })
            .then(res => {
                setCategorie(res.data)
            })
        axios.get("http://localhost:1337/products/count", {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("JWT")}`,
            }
        })
            .then(res => {
                setProduct(res.data)
            })
    })
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-4 text-center infoBox">
                    <div className="card text-light bg-primary mb-3 w-100" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">تعداد کالا ها</div>
                        <div className="card-body">
                            <p className="card-text"><span className="infoBoxNum">{Product}</span> نوع کالا موجود است</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 text-center infoBox">
                    <div className="card text-light bg-danger mb-3 w-100" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">تعداد دسته بندی ها</div>
                        <div className="card-body">
                            <p className="card-text"><span className="infoBoxNum">{categorie}</span> دسته بندی داریم</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 text-center infoBox">
                    <div className="card text-light bg-success mb-3 w-100" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">تعداد فروش ها</div>
                        <div className="card-body">
                            <p className="card-text"><span className="infoBoxNum">25</span> عدد سبدخرید</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <ProductTable limited={true} limitNumber={5}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
