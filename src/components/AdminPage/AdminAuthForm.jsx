import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; // Імпортуємо useNavigate для навігації

const AdminAuthForm = () => {
    // Стани для зберігання введених даних
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate(); // Ініціалізуємо хук useNavigate

    // Заздалегідь задані дані для авторизації
    const correctUsername = "beautyAdmin";
    const correctPassword = "12345678";

    // Обробник натискання на кнопку "Вхід"
    const handleLogin = () => {
        if (username === correctUsername && password === correctPassword) {
            setErrorMessage("");
            // Зберігаємо інформацію про авторизацію в localStorage
            localStorage.setItem("isAuthenticated", "true");
            // Перенаправляємо користувача на /dashboard
            navigate("/dashboard");
        } else {
            setErrorMessage("Неправильне ім'я користувача або пароль.");
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 5,
                p: 3,
                borderRadius: 2,
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Авторизація адміністратора
            </Typography>
            {/* Якщо є повідомлення про помилку */}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <TextField
                label="Ім'я користувача"
                variant="outlined"
                color="secondary"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2, mt: 2 }}
            />
            <TextField
                label="Пароль"
                variant="outlined"
                color="secondary"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleLogin}
            >
                Вхід
            </Button>
        </Box>
    );
};

export default AdminAuthForm;