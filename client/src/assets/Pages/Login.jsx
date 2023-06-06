import React, { useRef, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Login = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!v1 || !v2) {
        setErrMsg("Invalid password or email.");
        setIsLoading(false);
        return;
    }
    addUser()
    navigate("/dashboard")
    setIsLoading(false);
}


  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">
          Username
        </label>
        <input
          value={email}
          type="email"
          placeholder="youremail@domain.com"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          value={password}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </div>
  );

}