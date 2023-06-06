import React, { useRef, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"

export const Login = () => {

  const auth = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "test",
    password: "test",
  });
  
  const [data, setData] = useState(null);

  const { email, password } = credentials;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });

      localStorage.setitem("token", data.token);
      auth.login();
      console.log(data.message, data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const requestData = async () => {
    try {
      const { data } = await axios("api/auth/dashboard", {
        headers: {
          authorisation: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(data.message);
    } catch (err) {
      console.log(err);
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     if (!v1 || !v2) {
//         setErrMsg("Invalid password or email.");
//         setIsLoading(false);
//         return;
//     }
//     addUser()
//     navigate("/dashboard")
//     setIsLoading(false);
// }


  return (
    <div className="auth-form-container">
      <form onSubmit={login} className="login-form">
        <label htmlFor="email">
          Username
        </label>
        <input
          value={email}
          type="email"
          placeholder="youremail@domain.com"
          id="email"
          name="email"
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </div>
  );

}
 