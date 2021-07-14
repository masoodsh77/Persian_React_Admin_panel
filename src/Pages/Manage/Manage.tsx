import React from 'react'
import { Button } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router'
import ProductTable from '../../Components/ProductTable/ProductTable'

function Main(props: RouteComponentProps) {
    return (
        <>
            <div className="container pt-4">
                <div className="row">
                    <div className="title col-12 p-2">
                        <div className="row">
                            <h2 className="pt-2 col-6">
                                مدیریت محصولات
                            </h2>
                            <div className="col-6 d-flex justify-content-end">
                                <Button variant="warning">+ افزودن کالا جدید</Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-2 col-12 information">
                        <ProductTable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
