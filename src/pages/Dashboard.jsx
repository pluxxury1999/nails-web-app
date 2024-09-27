import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Перевіряємо стан авторизації з localStorage
        const isAuthenticated = localStorage.getItem("isAuthenticated");

        // Якщо користувач не авторизований, перенаправляємо на сторінку авторизації
        if (isAuthenticated !== "true") {
            navigate("/admin");
        }
    }, [navigate]);

    return <div>Dashboard</div>;
};

export default Dashboard;