import { createBrowserRouter } from "react-router-dom";
import Chats from "../Pages/Chats/Chats";
import Groups from "../Pages/Groups/Groups";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/home/profile",
            element: <Profile />,
          },
          {
            path: "/home/chats",
            element: <Chats />,
          },
          {
            path: "/home/groups",
            element: <Groups />,
          },
          {
            path: "/home/settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
