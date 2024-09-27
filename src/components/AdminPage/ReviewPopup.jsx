import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Star, StarBorder } from "@mui/icons-material";

const ReviewPopup = ({ open, onClose, master, record, onSaveReview }) => {
    const [customerName, setCustomerName] = useState(record.customer.name);
    const [customerPhone, setCustomerPhone] = useState(record.customer.phone);
    const [service, setService] = useState(record.service);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    // Функція для виставлення рейтингу
    const handleRatingChange = (value) => {
        setRating(value);
    };

    // Функція для збереження відгуку
    const handleSubmit = () => {
        const review = {
            customerName,
            customerPhone,
            service,
            rating,
            reviewText,
            date: new Date().toLocaleDateString("uk-UA"), // Дата відгуку
        };

        onSaveReview(review); // Передаємо відгук у верхній компонент для збереження
        onClose(); // Закриття попапу після збереження
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Додати відгук про майстра</DialogTitle>
            <DialogContent>
                <TextField
                    label="Майстер"
                    value={master}
                    disabled
                    fullWidth
                    sx={{ mb: 2, mt: 2 }}
                    color="secondary"
                />
                <TextField
                    label="Ім'я клієнта"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    fullWidth
                    disabled
                    sx={{ mb: 2 }}
                    color="secondary"
                />
                <TextField
                    label="Номер телефону"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    fullWidth
                    disabled
                    sx={{ mb: 2 }}
                    color="secondary"
                />
                <TextField
                    label="Послуга"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    fullWidth
                    disabled
                    sx={{ mb: 2 }}
                    color="secondary"
                />
                <Typography variant="body1" align="center">
                    Рейтинг:
                </Typography>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <IconButton
                            key={value}
                            onClick={() => handleRatingChange(value)}
                            sx={{
                                color: value <= rating ? "#FFD700" : "default", // Жовтий колір для вибраних зірочок
                            }}
                        >
                            {value <= rating ? <Star /> : <StarBorder />}
                        </IconButton>
                    ))}
                </Box>
                <TextField
                    label="Розширений відгук"
                    color="secondary"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary" variant="outlined">
                    Скасувати
                </Button>
                <Button
                    onClick={handleSubmit}
                    color="secondary"
                    variant="contained"
                >
                    Зберегти
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReviewPopup;