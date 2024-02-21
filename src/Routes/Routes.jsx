import { createBrowserRouter } from "react-router-dom";
import Chats from "../pages/Chats/Chats";
import Groups from "../pages/Groups/Groups";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import Main from "../layout/Main";

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
