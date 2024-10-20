import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/DashboardNavbar";

export const Layout = () => {
  const renderSelectionUI = () => {
    return <>
      <div className="">
        <header className="">
          <Navbar />
        </header>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  }

  return renderSelectionUI();
};
