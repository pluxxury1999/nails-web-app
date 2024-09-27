import { Box, Modal } from "@mui/material";

import BookingForm from "./BookingForm"; // Імпортуємо форму запису
import React from "react";

const BookingPopup = ({ isOpen, onClose, master }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    p: 4,
                    width: "600px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    margin: "0 auto",
                    mt: 10,
                }}
            >
                {/* Перевірка, якщо master переданий */}
                {master && (
                    <BookingForm
                        master={master} // Передаємо дані про майстра у форму
                        onBack={onClose} // Закриваємо попап після успішного запису
                    />
                )}
            </Box>
        </Modal>
    );
};

export default BookingPopup;