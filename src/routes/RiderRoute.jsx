import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../components/loading";
import Forbidden from "../components/Forbidden";

const RiderRoute = ({children}) => {
  const { loading, user } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user|| roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RiderRoute;
