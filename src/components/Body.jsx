import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Body = () => {
  const {isMenuOpen} = useSelector((store) => store.app);
  return (
    <div className="flex">
      {isMenuOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
