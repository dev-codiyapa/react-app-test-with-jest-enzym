import React from "react";
import { ILogin } from "./interfaces";
import "./Login.component.css"

const Login: React.FC<ILogin> = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="submit" value="Subscribe" />
      </form>
    </>
  );
};

export default Login;
