import React, {useState} from "react";

export const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">Username</label>
        <input value={email} type="email" placeholder="youremail@domain.com" id="email" name="email"/>
        <label for="password">Password</label>
        <input value={password} type="password" placeholder="***********" id="password" name="password"/>
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </>
  );

}