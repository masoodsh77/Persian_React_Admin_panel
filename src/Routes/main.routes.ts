import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Layouts from "../Layouts/Layouts";
import Main from '../Pages/Main/Main'

const routes = [
  { path: "/", exact: true, Component: Main },
  { path: "/login", exact: true, Component: Login },
  { path: "/register", exact: true, Component: Register },
  { path: "/dashboard", exact: false, Component: Layouts },
];
export default routes;
