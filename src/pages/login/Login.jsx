import React from "react";
import logo from "../../assets/images/logo-white.svg";
import "./Login.scss";
import { useFormHook } from "./useFormHook";

const Login = () => {
  const { form, errors, handleChange, handleSubmit } = useFormHook();

  return (
    <div class="login">
      <div class="container">
        <div class="image">
          <img src={logo} alt="" />
        </div>
        <form action="">
          <div class="field">
            <label>Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
            />
            <span class="error"> {errors.username}</span>
          </div>
          <div class="field">
            <label>Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
            />
            <span class="error"> {errors.password}</span>
          </div>
          <span class="btn" onClick={handleSubmit}>
            SUBMIT
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
