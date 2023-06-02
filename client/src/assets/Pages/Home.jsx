import React from "react";
import {useState} from "react";
import AddPet from "../components/AddPet.jsx";
import {Login} from "./Login.jsx"
import {Register} from "./Register.jsx"
import "./Home.css";

export default function Home() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = () => {
    setCurrentForm(formName);
  }


  return (
    <div  className="container-fluid">
      <div className="content">
        <br></br><br></br>
        <header> <img src="https://cdn.pixabay.com/photo/2020/12/01/07/04/cats-5793173_1280.jpg"/></header>
        <h1>Pet Diary 📖</h1>
        <div className="home-container">
          <div>
            {currentForm === 'login'? <Login onFormSwitch={toggleForm}/> : <Register />}
          </div>
        </div>
      </div>
    </div>
  );
}
