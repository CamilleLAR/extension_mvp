import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import EditPet from "../components/EditPet";
import dayjs from "dayjs";
import "./Pets.css";

export default function Pets(props) {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [editingPetId, setEditingPetId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    try {
      const response = await fetch(`/api/pets`, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
        const data = await response.json();
        if (!response.ok) throw new Error(response.statusText);
        setPets(data);
        // console.log(pets);
    } catch (err) {
      setError(err.message);
    }
  }

  const showPetPage = (id) => {
    navigate(`/private/pets/${id}`);
  };

  return (
    <div className="container-fluid">
      <br /><br /><br />
      <header> <img src="https://cdn.pixabay.com/photo/2020/12/01/07/04/cats-5793173_1280.jpg"/></header>
      <h1 className="text-center">My Pets 🐾</h1><br />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {pets ?
          (
            pets.map((pet) => (
              <div key={pet.id} className="col-3">
                <Link to={`/private/pets/${pet.id}`} className="card text-decoration-none">
                  <div className="card-body">
                    <div className="pet-image">
                      <img src="/rabbit.png" alt="Pet" className="img-fluid" />
                    </div>
                    <div className="pet-items">
                      <h2 className="card-title">{pet.name}</h2>
                      <h5>Type: {pet.type}</h5>
                      <h6>DOB: {dayjs(pet.birthdate).format("DD/MM/YYYY")}</h6>
                      <p>Notes: {pet.notes}</p>
                    </div>
                  </div>
                </Link>
                <div className="button-group">
                  {editingPetId === pet.id ? (
                    <EditPet pet={pet} updatePet={updatePet} />
                  ) : (
                    <span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => showPetPage(pet.id)}
                      >
                        Go To Profile
                      </button>
                    </span>
                  )}
                </div>
              </div>
            ))
          ):null}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
