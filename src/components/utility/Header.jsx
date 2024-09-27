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
import React, { useState } from "react";

import BookingPopup from "../Forms/BookingPopup"; // Імпортуємо компонент попапу для запису
import MasterSelectPopup from "../Forms/MasterSelectPopup"; // Імпортуємо компонент вибору майстра

const Header = () => {
    const location = useLocation(); // Отримуємо поточний шлях
    const [isMasterSelectOpen, setMasterSelectOpen] = useState(false); // Стан для відкриття вибору майстра
    const [selectedMaster, setSelectedMaster] = useState(null); // Зберігає вибраного майстра
    const [isBookingOpen, setBookingOpen] = useState(false); // Стан для попапу бронювання

    // Функція для перевірки активного шляху
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Функція для відкриття вибору майстра
    const handleBookNowClick = () => {
        setMasterSelectOpen(true); // Відкриваємо попап вибору майстра
    };

    // Функція для закриття вибору майстра
    const handleMasterSelectClose = () => {
        setMasterSelectOpen(false);
    };

    // Функція для обробки вибору майстра
    const handleMasterSelect = (master) => {
        setSelectedMaster(master); // Зберігаємо вибраного майстра
        setMasterSelectOpen(false); // Закриваємо вибір майстра
        setBookingOpen(true); // Відкриваємо попап для бронювання
    };

    // Функція для закриття попапу бронювання
    const handleBookingClose = () => {
        setBookingOpen(false);
        setSelectedMaster(null); // Скидаємо вибраного майстра після закриття попапу
    };

    return (
        <>
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
                            variant="contained"
                            color="secondary"
                            sx={{ ml: 2 }}
                            onClick={handleBookNowClick} // Викликаємо вибір майстра
                        >
                            Записатись
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Попап для вибору майстра */}
            {isMasterSelectOpen && (
                <MasterSelectPopup
                    isOpen={isMasterSelectOpen}
                    onClose={handleMasterSelectClose}
                    onSelect={handleMasterSelect} // Передаємо функцію для обробки вибору майстра
                />
            )}

            {/* Попап для бронювання після вибору майстра */}
            {selectedMaster && (
                <BookingPopup
                    isOpen={isBookingOpen}
                    onClose={handleBookingClose}
                    master={selectedMaster} // Передаємо вибраного майстра до попапу бронювання
                />
            )}
        </>
    );
};

export default Header;