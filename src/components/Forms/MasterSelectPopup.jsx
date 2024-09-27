import {
    Avatar,
    Box,
    Button,
    Grid,
    Modal,
    Paper,
    Rating,
    Typography,
} from "@mui/material";

import React from "react";
import masters from "../MastersPage/masters"; // Імпортуємо масив майстрів

const MasterSelectPopup = ({ isOpen, onClose, onSelect }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    p: 4,
                    width: "100%", // Ширина контейнера на весь екран
                    maxWidth: "65vw", // Максимальна ширина - 65% ширини вікна
                    maxHeight: "85vh", // Максимальна висота - 85% висоти вікна
                    overflowY: "auto", // Дозволяємо вертикальне прокручування при переповненні
                    margin: "5vh auto", // Центрування по вертикалі з верхнім відступом
                    boxShadow: 24,
                    display: "flex",
                    flexDirection: "column", // Вертикальне розташування контенту
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" gutterBottom textAlign="center">
                    Оберіть майстра
                </Typography>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ flex: 1 }}
                >
                    {masters.map((master) => (
                        <Grid item xs={12} sm={6} md={4} key={master.name}>
                            <Paper
                                sx={{
                                    p: 2, // Зменшений padding для картки
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    "&:hover": { backgroundColor: "#f0f0f0" },
                                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Легша тінь для картки
                                }}
                                onClick={() => onSelect(master)} // Передаємо вибраного майстра
                            >
                                <Avatar
                                    alt={master.name}
                                    src={master.photo}
                                    sx={{ width: 60, height: 60, mb: 1 }} // Зменшуємо розмір аватара
                                />
                                <Typography
                                    variant="subtitle2" // Зменшуємо розмір шрифту для імені
                                    gutterBottom
                                >
                                    {master.name}
                                </Typography>
                                <Typography
                                    variant="body2" // Зменшуємо розмір шрифту для посади
                                    color="textSecondary"
                                >
                                    {master.position}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mt: 0.5, // Зменшуємо відступ між елементами
                                    }}
                                >
                                    <Rating
                                        name="read-only"
                                        value={master.rating}
                                        precision={0.1}
                                        readOnly
                                        size="small" // Зменшуємо розмір зірочок
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{ ml: 0.5 }} // Менший відступ між зірочками та цифрою рейтингу
                                    >
                                        {master.rating.toFixed(1)}{" "}
                                        {/* Відображаємо рейтинг з однією цифрою після коми */}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onClose}
                    sx={{ mt: 4 }}
                >
                    Закрити
                </Button>
            </Box>
        </Modal>
    );
};

export default MasterSelectPopup;