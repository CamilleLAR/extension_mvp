import React from "react";
import AddPet from "../components/AddPet.jsx";
import Login from "./Login.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div  className="container-fluid">
       
      <div className="content">
        <br></br><br></br>
        <header> <img src="https://cdn.pixabay.com/photo/2020/12/01/07/04/cats-5793173_1280.jpg"/></header>
        <h1>Pet Diary 📖</h1>
        <div className="home-container">
          <Login />
        </div>
      </div>
    </div>
  );
}
