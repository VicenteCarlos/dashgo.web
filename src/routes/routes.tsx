import { Login , DashboardTech, DashboardWork } from "../pages/";


const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard/tech",
    element: <DashboardTech />,
  },
  {
    path: "/dashboard/work",
    element: <DashboardWork />,
  },
];

export { routes };
