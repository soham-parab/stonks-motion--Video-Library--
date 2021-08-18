import React from "react";
import { useAuth } from "../../contexts/authContext";

export const Logout = () => {
  const { auth, setAuth } = useAuth();

  return <div>Helo</div>;
};
