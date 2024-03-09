
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
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
