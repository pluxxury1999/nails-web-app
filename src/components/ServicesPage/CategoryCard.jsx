// CategoryCard.js

import {
    Avatar,
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    Rating,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

import BookingPopup from "../Forms/BookingPopup";
import masters from "../MastersPage/masters" // Імпортуємо попап для запису

// Компонент CategoryCard приймає пропс category з інформацією про категорію
const CategoryCard = ({ category }) => {
    const [selectedMaster, setSelectedMaster] = useState(null);
    const [isBookingOpen, setBookingOpen] = useState(false);

    // Функція для відкриття попапу з вибраним майстром
    const handleBookingOpen = (master) => {
        setSelectedMaster(master);
        setBookingOpen(true);
    };

    // Функція для закриття попапу
    const handleBookingClose = () => {
        setSelectedMaster(null);
        setBookingOpen(false);
    };

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    mb: 4,
                    borderRadius: 4,
                    display: "flex", // Гнучке горизонтальне розташування
                    flexDirection: "row", // Напрямок - горизонтальний
                    alignItems: "flex-start", // Вирівнювання елементів по верхньому краю
                    width: "100%", // Картка займає всю ширину контейнера
                    minHeight: "200px", // Мінімальна висота картки
                }}
            >
                {/* Ліва частина - Інформація про категорію та послуги */}
                <Box sx={{ flex: 1, pr: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {category.categoryTitle}
                    </Typography>
                    <List>
                        {category.services.map((service, index) => (
                            <ListItem key={index} disableGutters>
                                <ListItemText
                                    primary={service.title}
                                    secondary={`від ${service.minPrice} грн`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider orientation="vertical" flexItem />

                {/* Права частина - Інформація про майстрів */}
                <Box sx={{ flex: 1, pl: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Наші майстри:
                    </Typography>
                    <Box>
                        {category.masters.map((master, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                    p: 1,
                                    border: "1px solid #eee",
                                    borderRadius: 2,
                                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                                    justifyContent: "space-between", // Розділяємо майстра та кнопку
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        alt={master.name}
                                        src={master.photo}
                                        sx={{ width: 56, height: 56, mr: 2 }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                        >
                                            {master.name}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {/* Рейтинг у вигляді зірочок */}
                                            <Rating
                                                value={master.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small" // Зменшений розмір зірочок
                                            />
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                sx={{ ml: 1 }}
                                            >
                                                {master.rating.toFixed(1)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    onClick={() =>
                                        handleBookingOpen(
                                            masters.filter((item) => {return item.name === master.name})[0] // Знаходимо майстра за ім'ям
                                        )
                                    } // Відкриваємо попап з вибраним майстром
                                >
                                    Записатись
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Paper>

            {/* Попап для запису */}
            <BookingPopup
                isOpen={isBookingOpen}
                onClose={handleBookingClose}
                master={selectedMaster} // Передаємо весь об'єкт майстра в попап
            />
        </>
    );
};

export default CategoryCard;