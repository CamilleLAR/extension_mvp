import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Pet from "./assets/Pages/Pet";
import Pets from "./assets/Pages/Pets";
import AddPet from "./assets/components/AddPet";
import { Login } from "../src/assets/Pages/Login"
import { Register } from "../src/assets/Pages/Register"
import "./App.css";
import Dashboard from "./assets/Pages/Dashboard";
import NavBar from "./assets/components/NavBar";

export default function App() {

  return (
    <>
      <div>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<Pet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addpet" element={<AddPet />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}
