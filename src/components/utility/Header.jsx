import {
    AppBar,
    Box,
    Button,
    Container,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import React from "react";

const Header = () => {
    const location = useLocation(); // Отримуємо поточний шлях

    // Функція для перевірки активного шляху
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Назва салону */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Beauty Studio
                    </Typography>
                    {/* Посилання на розділи */}
                    <Box sx={{ display: "flex", flexGrow: 1 }}>
                        <MenuItem
                            component={Link}
                            to="/home"
                            sx={{
                                color: isActive("/home")
                                    ? "secondary.main"
                                    : "#fff",
                                textDecoration: isActive("/")
                                    ? "underline"
                                    : "none",
                            }}
                        >
                            Домівка
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/masters"
                            sx={{
                                color: isActive("/masters")
                                    ? "secondary.main"
                                    : "#fff",
                                textDecoration: isActive("/masters")
                                    ? "underline"
                                    : "none",
                            }}
                        >
                            Майстри
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/services"
                            sx={{
                                color: isActive("/services")
                                    ? "secondary.main"
                                    : "#fff",
                                textDecoration: isActive("/services")
                                    ? "underline"
                                    : "none",
                            }}
                        >
                            Послуги
                        </MenuItem>
                    </Box>
                    {/* Кнопка Book Now */}
                    <Button
                        component={Link}
                        to="/book"
                        variant="contained"
                        color="secondary"
                        sx={{ ml: 2 }}
                    >
                        Записатись
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
