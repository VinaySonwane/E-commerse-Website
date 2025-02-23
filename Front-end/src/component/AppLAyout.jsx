//import { Outlet } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
// import { LoginPage } from "../pages/loginPage";

export const AppLayout = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/login">Login</Link> |
        <Link to="/registration">Registration</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};
