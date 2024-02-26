import {
  FaHome,
  FaList,
  FaRegNewspaper,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { io } from "socket.io-client";

const Home = () => {
  const socket = io.connect("/");
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      {/* content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
