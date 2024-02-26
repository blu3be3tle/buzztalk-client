import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  // console.log(location);
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
