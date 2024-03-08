import { createBrowserRouter } from "react-router-dom";
import Chats from "../Pages/Chats/Chats";
import Groups from "../Pages/Groups/Groups";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/home/profile",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "/home/chats",
            element: (
              <PrivateRoute>
                <Chats />
              </PrivateRoute>
            ),
          },
          {
            path: "/home/groups",
            element: (
              <PrivateRoute>
                <Groups />
              </PrivateRoute>
            ),
          },
          {
            path: "/home/settings",
            element: (
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            ),
          },
        ],
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
]);

export default router;
