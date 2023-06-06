import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

    async function getUserPets() {
        try {
          const response = await fetch("/api/:user_id/pets");
          const data = await response.json();
          if (!response.ok) throw new Error(response.statusText);
          setPets(data);
        } catch (err) {
          setError(err.message);
        }
      }


    return (
      <div>
            <h1>Welcome to your Dashboard</h1>
            <p><a href="/addpet">Add a pet</a></p>
            
      </div>
    );
};

