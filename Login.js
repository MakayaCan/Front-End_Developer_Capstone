import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/welcome/${username}`);
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Sign In</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="social-login">
        <p>Or continue with:</p>
        <button className="google-btn">Google</button>
        <button className="facebook-btn">Facebook</button>
      </div>
    </div>
  );
};

export default Login;
