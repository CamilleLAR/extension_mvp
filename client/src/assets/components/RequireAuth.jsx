import { useEffect, useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
    const [loading, setLoading] = useState(true);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            auth.logout();
        } else {
            auth.login();
        }

    })

    return (
        <div>
            
        </div>
    )
}
