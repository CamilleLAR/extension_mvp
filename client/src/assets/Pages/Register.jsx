import React, {useState} from "react";

export const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Firstname</label>
                <input value={firstname} type="firstname" placeholder="firstname" id="firstname" name="firstname"/>
                <label htmlFor="lastname">Lastname</label>
                <input value={lastname} type="lastname" placeholder="lastname" id="lastname" name="lastname"/>
                <label htmlFor="email">Username</label>
                <input value={email} type="email" placeholder="youremail@domain.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" placeholder="***********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</button>
        </>
    );
}