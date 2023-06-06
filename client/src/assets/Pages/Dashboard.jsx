import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getUsersPets();
  }, []);

    const getUsersPets = async () => {
        try {
          const { data } = await axios("api/auth/pets", {
            headers: {
              authorisation: "Bearer" + localStorage.getItem("token"),
            },
          });
          setData(data);
        } catch (err) {
          setError(err.message);
        }
      }


    return (
      <div>
        <h1>Welcome to your Dashboard</h1>
        <div>{ data?.message }</div>
            <p><a href="/addpet">Add a pet</a></p>
      </div>
    );
};

export default Dashboard;