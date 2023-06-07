import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";


function Dashboard() {

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const { firstname, lastname, email } = user;


  useEffect(() => {
    getUsersInfo();
  }, []);

  async function getUsersInfo() {
    try {
      const response = await fetch(`/api/users`, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(user)
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      setError(err.message);
    }
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!user) {
      return <div>Loading...</div>;
    }
  }


    return (
      <div>
        <br /><br /><br />
        <header> <img src="https://cdn.pixabay.com/photo/2020/12/01/07/04/cats-5793173_1280.jpg"/></header><br/>
        <h1>Welcome to your Dashboard</h1>
        <div className="profile-container">
          <div className="profile-pic">
            <img className="pic" src="https://i.pinimg.com/736x/44/76/18/447618cb49cf25bccc9ce1c252ca4c5a.jpg" />
          </div>
          <div className="profile-info">
            <h2>User Information:</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
          </div>
        </div>
        <div className="navLinks">
          <Link
            className="db-nav-link"
            to="/private/pets"
          >
           🐾 My Pets 🐾
          </Link>
          <Link
            className="db-nav-link"
            to="/private/addpet"
          >
            Add a pet
          </Link>
        </div>
      </div>
    );
};

export default Dashboard;