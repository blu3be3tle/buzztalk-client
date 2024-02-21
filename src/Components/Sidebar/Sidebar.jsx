import {
  FaHome,
  FaList,
  FaRegNewspaper,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-52 min-h-screen bg-yellow-400">
      <ul className="menu p-4">
        <li className="py-1">
          <NavLink to="/">
            <FaHome />
            BuzzTalk
          </NavLink>
        </li>

        <>
          <li>
            <NavLink to="/home/profile">
              <FaUser />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/chats">
              <FaList />
              Chats
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/groups">
              <FaUsers />
              Groups
            </NavLink>
          </li>

          <li>
            <NavLink to="/home/settings">
              <IoMdSettings />
              Settings
            </NavLink>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Sidebar;
