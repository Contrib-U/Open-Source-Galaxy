import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="profile">
      Sign-Up
    </button>
  );
};

export default SignUp;
