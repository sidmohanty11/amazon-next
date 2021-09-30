import React from "react";
import "../Auth.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth__container">
      <form className="auth__container_form">
        <h2>Signup | Amazonly</h2>
        <input
          className="auth__container_form_input"
          type="text"
          placeholder="name"
        />
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
          Already have an account?{" "}
          <Link to="/signup" style={{ color: "#19181a" }}>
            Login
          </Link>
        </p>
        <button className="auth__container_form_button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
