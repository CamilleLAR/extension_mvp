import React, { useRef, useEffect, useState} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [firstname, setFirstName] = useState("");
    const [firstnameFocus, setFirstNameFocus] = useState(false);

    const [lastname, setLastName] = useState("");
    const [lastnameFocus, setLastNameFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPwd(result);
        const match = password === matchPwd;
        setValidMatch(match);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg("");
    }, [email, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, pwd);
        setSuccess(true);
    }

    return (
        <div className="auth-form-container">
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"></p>
            </section>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="firstname">
                    Firstname
                </label>
                <input
                    type="firstname"
                    placeholder="firstname"
                    id="firstname"
                    name="firstname"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastname">
                    Lastname
                </label>
                <input
                    type="lastname"
                    placeholder="lastname"
                    id="lastname"
                    name="lastname"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">
                    Email address
                    <span className={validEmail ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="youremail@domain.com"
                    id="email"
                    name="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                <p
                    id="uidnote"
                    className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Valid email address required. 
                </p>
                <label htmlFor="password">
                    Password
                    <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !password ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    placeholder="***********"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => setMatchPwd(e.target.value)}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                </p>
                <label htmlFor="confirm_pwd">
                    Confirm Password
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    placeholder="***********"
                    id="confirm_pwd"
                    required
                    onChange={(e) => setMatchPwd(e.target.value)}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirm_pwd" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>
                <button type="submit" disabled={!validEmail || !validPwd || !validMatch || !firstname || !lastname ? true : false}>
                    Sign up
                </button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}>
                Already have an account? Login here.
            </button>
        </div>
    );
}