import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Card, Button } from "react-bootstrap";

interface IProduct{
  limited?:boolean,
  limitNumber?:number
}

const ProductTable:React.FC<IProduct> = ({limited,limitNumber}) => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
      })
      .then((res) => {
        if(limited === true){
          const lastP = res.data.slice(0,limitNumber)
          console.log(lastP);
          setProduct(lastP);
        }else{
          setProduct(res.data)
        }
      });
  },[limited , limitNumber]);
  return (
    <div>
      <Card>
        <Card.Header>آخرین محصولات</Card.Header>
        <Card.Body>
          <Card.Text>
            <Table bordered hover striped size="sm" className="text-center">
              <thead className="bg-dark text-light">
                <tr>
                  <th>ردیف</th>
                  <th>عکس</th>
                  <th>کد</th>
                  <th>نام محصول</th>
                  <th>تعداد</th>
                  <th>قیمت فروش</th>
                  {limited ?null : <th>عملیات</th>}
                </tr>
              </thead>
              <tbody>
                {Product.map((item: any, index: number) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`http://localhost:1337${item.pic.url}`}
                          alt=""
                          width="40px"
                        />
                      </td>
                      <td> {item.code} </td>
                      <td> {item.name} </td>
                      <td> {item.Qty} عدد </td>
                      <td> {item.price} ریال </td>
                      {
                      limited
                       ? 
                       null 
                       : 
                       <th>
                         <Button variant="success">ویرایش</Button>
                         {' '}
                         <Button variant="danger">حذف</Button>
                       </th>
                      }
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductTable;
