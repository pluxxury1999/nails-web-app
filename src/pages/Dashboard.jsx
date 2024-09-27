import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Booking from "../components/AdminPage/Booking"; // Імпортуємо компонент для записів
import Comments from "../components/AdminPage/Comments";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState("booking"); // Встановлюємо початковий стан на "Записи"

    useEffect(() => {
        // Перевіряємо стан авторизації з localStorage
        const isAuthenticated = localStorage.getItem("isAuthenticated");

        // Якщо користувач не авторизований, перенаправляємо на сторінку авторизації
        if (isAuthenticated !== "true") {
            navigate("/admin");
        }
    }, [navigate]);

    const handleTabChange = (event) => {
        setCurrentTab(event.target.value); // Оновлюємо стан при зміні радіокнопки
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "calc(100vh - 64px - 76px)",
                textAlign: "center",
                padding: 2,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Панель адміністратора
            </Typography>

            <FormControl component="fieldset" sx={{ mb: 3 }}>
                <RadioGroup row value={currentTab} onChange={handleTabChange}>
                    <FormControlLabel
                        value="booking"
                        control={<Radio color="secondary" />}
                        label="Записи"
                    />
                    <FormControlLabel
                        value="comments"
                        control={<Radio color="secondary" />}
                        label="Відгуки"
                    />
                </RadioGroup>
            </FormControl>

            <Box sx={{ width: "100%", maxWidth: 800 }}>
                {" "}
                {/* Обмежуємо ширину контенту */}
                {currentTab === "booking" && <Booking />}
                {currentTab === "comments" && <Comments />}
            </Box>
        </Box>
    );
};

export default Dashboard;