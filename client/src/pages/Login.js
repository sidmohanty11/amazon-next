import React from "react";
import "../Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth__container">
      <form className="auth__container_form">
        <h2>Login | Amazonly</h2>
        <input
          className="auth__container_form_input"
          type="text"
          placeholder="email"
        />
        <input
          className="auth__container_form_input"
          type="text"
          placeholder="password"
        />
        <p>
          Don't have an account yet?{" "}
          <Link to="/signup" style={{ color: "#19181a" }}>
            Signup
          </Link>
        </p>
        <button className="auth__container_form_button">Login</button>
      </form>
    </div>
  );
};

export default Login;
