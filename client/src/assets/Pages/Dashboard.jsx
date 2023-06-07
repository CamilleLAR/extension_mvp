import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";


function Dashboard() {

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);


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
        const data = await response.json();
        if (!response.ok) throw new Error(response.statusText);
        setUser(data);
        console.log(data);
    } catch (err) {
      setError(err.message);
    }
  }


    return (
      <div>
        <br /><br /><br />
        <header> <img src="https://cdn.pixabay.com/photo/2020/12/01/07/04/cats-5793173_1280.jpg"/></header><br/>
        <h1>Welcome to your Dashboard</h1>
        <div className="navLinks">
          <Link
            className="db-nav-link"
            to="/private/pets"
          >
            My Pets
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