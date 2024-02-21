import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Chats from "../Pages/Chats/Chats";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Groups from "../Pages/Groups/Groups";
import Settings from "../Pages/Settings/Settings";

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
    ],
  },
]);

export default router;
