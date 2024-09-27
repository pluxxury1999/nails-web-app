import {
    Avatar,
    Box,
    Button,
    Grid,
    Paper,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

import BookingPopup from "../Forms/BookingPopup"; // Імпортуємо компонент попапа для запису

// Компонент для відображення інформації про майстра у горизонтальному вигляді
const MasterCard = ({
    masterName,
    masterPhoto,
    position,
    rating,
    services,
}) => {
    const [isBookingOpen, setBookingOpen] = useState(false);

    const handleBookingOpen = () => {
        setBookingOpen(true);
    };

    const handleBookingClose = () => {
        setBookingOpen(false);
    };

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    display: "flex",
                    mb: 4,
                    borderRadius: "10px",
                    alignItems: "center",
                }}
            >
                <Grid container spacing={2}>
                    {/* Ліва частина - інформація про майстра */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center", // Центрування по вертикалі
                            borderRight: "1px solid #eee",
                            pr: 2,
                        }}
                    >
                        <Avatar
                            alt={masterName}
                            src={masterPhoto}
                            sx={{ width: 120, height: 120, mb: 2 }}
                        />
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{ fontWeight: "bold" }}
                        >
                            {masterName}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            gutterBottom
                        >
                            {position}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Rating value={rating} precision={0.5} readOnly />
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                {rating}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 3 }}
                            onClick={handleBookingOpen} // Відкриваємо попап при натисканні
                        >
                            Записатись
                        </Button>
                    </Grid>

                    {/* Права частина - таблиця з послугами */}
                    <Grid item xs={12} md={9}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Послуги:
                        </Typography>
                        <TableContainer>
                            <Table size="small" aria-label="services table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Назва послуги</TableCell>
                                        <TableCell align="right">
                                            Ціна (грн)
                                        </TableCell>
                                        <TableCell align="right">
                                            Тривалість (хв)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {services.map((service, index) => (
                                        <TableRow key={index}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {service.title}
                                            </TableCell>
                                            <TableCell align="right">
                                                {service.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                {service.duration}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>

            {/* Попап запису до майстра */}
            <BookingPopup
                isOpen={isBookingOpen}
                onClose={handleBookingClose}
                master={{
                    name: masterName,
                    position,
                    photo: masterPhoto,
                    services,
                }} // Передаємо об'єкт майстра до попапу
            />
        </>
    );
};

export default MasterCard;