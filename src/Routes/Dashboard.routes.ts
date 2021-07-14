import Dashboard from "../Pages/Dashboard/Dashboard";
import Tables from "../Pages/Tables/Tables";
import Manage from '../Pages/Manage/Manage'

const dashRoute = [
  { path: "/", exact: true, Component: Dashboard },
  { path: "/manage", exact: true, Component: Manage },
  { path: "/tables", exact: true, Component: Tables },
];
export default dashRoute;
