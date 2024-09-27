import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import BookingPopup from "../Forms/BookingPopup"; // Імпортуємо компонент попапу для запису
import MasterSelectPopup from "../Forms/MasterSelectPopup"; // Імпортуємо компонент вибору майстра
import { styled } from "@mui/system";

const HeroSection = () => {
    const [isMasterSelectOpen, setMasterSelectOpen] = useState(false); // Стан для відкриття вибору майстра
    const [selectedMaster, setSelectedMaster] = useState(null); // Зберігає вибраного майстра
    const [isBookingOpen, setBookingOpen] = useState(false); // Стан для попапу бронювання

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
        <Box
            sx={{
                backgroundColor: "#f8f8f8",
                padding: "50px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: "bold" }}
                        >
                            Ласкаво просимо до Beauty Studio
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            paragraph
                        >
                            Відкрийте для себе мистецтво краси з нашими
                            професійними послугами. Ми пропонуємо широкий спектр
                            процедур, щоб ви виглядали та почувалися на всі
                            100%. Запишіться на прийом вже сьогодні та відчуйте
                            трансформацію.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ mt: 3 }}
                            onClick={handleBookNowClick} // Відкриваємо вибір майстра при натисканні
                        >
                            Записатися
                        </Button>
                    </Grid>

                    {/* Права частина - зображення */}
                    <Grid item xs={12} md={6}>
                        <StyledImageContainer>
                            <img
                                src="/img/studio.webp"
                                alt="Beauty Salon"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        </StyledImageContainer>
                    </Grid>
                </Grid>
            </Container>

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
        </Box>
    );
};

const StyledImageContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "10px",
});

export default HeroSection;