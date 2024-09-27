import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const navigate = useNavigate();

    // Обробник кнопки "Вийти"
    const handleLogout = () => {
        // Видаляємо інформацію про авторизацію з localStorage
        localStorage.removeItem("isAuthenticated");
        // Перенаправляємо на сторінку входу
        navigate("/admin");
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
            <Toolbar>
                {/* Ліва частина з назвою салону */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Beauty Studio - Admin Panel
                </Typography>

                {/* Права частина з кнопкою виходу */}
                <Button
                    color="inherit"
                    onClick={handleLogout}
                    sx={{
                        borderColor: "#fff",
                        borderWidth: 1,
                        borderRadius: 2,
                    }}
                >
                    Вийти
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;