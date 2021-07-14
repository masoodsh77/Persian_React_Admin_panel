import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import DashboardHeader from "../Components/DashboardHeader/DashboardHeader";
import dashRoute from "../Routes/Dashboard.routes";
import sidebar from '../Routes/Sidebar'
import './Layout.css';
import { FaAngleLeft } from 'react-icons/fa'

function Layouts(props: RouteComponentProps) {
  useEffect(() => {
    if (localStorage.getItem("JWT") === null) {
      props.history.push("/Login")
    }
  })
  return (
    <div className="layout">
      <DashboardHeader />
      <div className="row MainLayout">
        <aside className="bg-dark sideBar col-2 h-100">
          <ul>
            {
              sidebar.map((item, i) => {
                return (
                  <Link to={props.match.url + item.href}>
                    <li className="d-flex justify-content-between p-2">
                      {item.icon}{item.title}<FaAngleLeft />
                    </li>
                  </Link>
                )
              })
            }
          <div className="ExitBtn">
            <ul>
              <li 
                onClick={()=>{
                  localStorage.removeItem('JWT')
                  localStorage.removeItem('Uid')
                  props.history.push('/')
                }}
              >
                خروج
              </li>
            </ul>
          </div>
          </ul>
        </aside>
        <main className="col-10">
          <Switch>
            {
              dashRoute.map(({ path, exact, Component }, index) => {
                return (
                  <Route
                    key={index}
                    path={props.match.path + path}
                    exact={exact}
                    render={props => <Component {...props} />}
                  />
                );
              })}
          </Switch>
          <footer className="footer">طراحی شده توسط <a href="https://masoodsh77.github.io/">مسعود شاطرآبادی</a></footer>
        </main>
      </div>
    </div>
  );
}

export default Layouts;
