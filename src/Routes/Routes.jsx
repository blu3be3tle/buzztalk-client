import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Chats from "../pages/Chats/Chats";
import Groups from "../pages/Groups/Groups";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Settings from "../pages/Settings/Settings";

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
