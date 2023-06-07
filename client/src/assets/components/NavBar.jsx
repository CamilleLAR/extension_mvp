import React, { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function NavBar() {

    const auth = useContext(AuthContext);

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

    const logout = () => {
        auth.logout();
        setUser(false);
        localStorage.removeItem("token");
      };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Pet Diary📖
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNav}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        { auth.user ? (
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/private">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/private/pets">
                                        My Pets
                                    </Link>
                                </li>     
                            </ul>
                            <button onClick={logout} className="logoutBtn">Logout</button>
                        </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}



