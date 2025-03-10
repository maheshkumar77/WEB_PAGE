import React, { useState } from "react";

import "../css/login.css";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
 
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert("Please enter both username and password.");
      return;
    }

    if (user.username === "admin" && user.password === "password") {
      alert("Login Sucessfull"); // Redirect on successful login
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
