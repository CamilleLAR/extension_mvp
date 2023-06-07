import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";


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
        <h1>Welcome to your Dashboard</h1>
        <div className="navLinks">
          <Link
            className="nav-link"
            to="/private/pets"
          >
            My Pets
          </Link>
          <Link
            className="nav-link"
            to="/private/addpet"
          >
            Add a pet
          </Link>
        </div>
      </div>
    );
};

export default Dashboard;