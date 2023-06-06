import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios"

function Login(props) {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  
  // const [data, setData] = useState(null);

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
        timeout: 5000,
      });

      localStorage.setItem("token", data.token);
      auth.login();
      navigate ("/dashboard")
      console.log(data.message, data.token);
    } catch (err) {
      console.log(err);
    }
  };

  // const requestData = async () => {
  //   try {
  //     const { data } = await axios("/api/auth/profile", {
  //       headers: {
  //         authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     });
  
  //     console.log(data.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <div className="auth-form-container">
      <form onSubmit={login} className="login-form">
        <label htmlFor="email">
          Email
        </label>
        <input
          value={email}
          type="email"
          placeholder="youremail@domain.com"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          value={password}
          name="password"
          type="password"
          placeholder="***********"
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </div>
  );

}

export default Login;