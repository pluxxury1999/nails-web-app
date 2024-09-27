import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";

import ContactInfoPopup from "./ContactInfoPopup"; // Імпортуємо компонент попапу з інформацією

const ContactSuggestion = () => {
    const [isPopupOpen, setPopupOpen] = useState(false); // Стан для відкриття попапу

    // Функція для відкриття попапу
    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    // Функція для закриття попапу
    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <Box
            sx={{
                backgroundColor: "#f4f4f4", // Світло-сірий фон
                py: 5, // Внутрішній відступ зверху та знизу
                textAlign: "center", // Текст по центру
                borderRadius: "10px", // Закруглені кути
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Легка тінь
                mt: 4, // Відступ зверху
                px: 2, // Внутрішній відступ з боків
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h5" component="h2" gutterBottom>
                    Не знайшли потрібну послугу?
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph
                    sx={{ mb: 3 }} // Відступ між текстом і кнопкою
                >
                    Якщо ви не побачили потрібну послугу, будь ласка, зв'яжіться
                    з нами. Можливо, ми зможемо запропонувати саме те, що ви
                    шукаєте.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleOpenPopup} // Відкриваємо попап при натисканні на кнопку
                >
                    Зв'язатися з нами
                </Button>
            </Container>
            {/* Попап з інформацією про контакти */}
            <ContactInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </Box>
    );
};

export default ContactSuggestion;