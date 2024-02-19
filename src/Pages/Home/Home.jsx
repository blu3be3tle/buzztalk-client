import {
  FaHome,
  FaList,
  FaRegNewspaper,
  FaUser,
  FaUsers,
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-58 min-h-screen bg-yellow-400">
        <ul className="menu p-4">
          <li className="py-1">
            <NavLink to="/">
              <FaHome></FaHome>
              BuzzTalk
            </NavLink>
          </li>

          <>
            <li>
              <NavLink to="/profile">
                <FaUser></FaUser>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/chats">
                <FaList></FaList>
                Chats
              </NavLink>
            </li>
            <li>
              <NavLink to="/groups">
                <FaUsers></FaUsers>
                Groups
              </NavLink>
            </li>

            <li>
              <NavLink to="/settings">
                <IoMdSettings></IoMdSettings>
                Settings
              </NavLink>
            </li>
          </>
        </ul>
      </div>

      {/* content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
