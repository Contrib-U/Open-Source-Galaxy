import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="profile m-2 py-2 px-4 "
      title="Log in to your account"
    >
      <i class="fas fa-sign-in-alt"></i> Log In
    </button>
  );
};

export default Login;
