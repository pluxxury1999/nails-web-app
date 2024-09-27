import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { Delete, ExpandLess, ExpandMore, Star } from "@mui/icons-material";
import React, { useState } from "react";

import ReviewPopup from "./ReviewPopup"; // Імпорт нового компоненту

// Функція для форматування дати у форматі день.місяць.рік
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const BookingCard = ({ master, photo, records, onDelete }) => {
    const [expanded, setExpanded] = useState(false); // Стан для розгортання/згортання списку
    const [reviewOpen, setReviewOpen] = useState(false); // Стан для відкриття/закриття попапу
    const [selectedRecord, setSelectedRecord] = useState(null); // Вибраний запис для відгуку

    const handleExpandClick = () => {
        setExpanded(!expanded); // Зміна стану розгортання
    };

    const handleOpenReview = (record) => {
        setSelectedRecord(record);
        setReviewOpen(true);
    };

    const handleCloseReview = () => {
        setReviewOpen(false);
        setSelectedRecord(null);
    };

    const handleSaveReview = (review) => {
        // Збереження відгуку у localStorage
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const updatedComments = comments.map((item) => {
            if (item.master === master) {
                return {
                    ...item,
                    comments: [...item.comments, review],
                };
            }
            return item;
        });
        localStorage.setItem("comments", JSON.stringify(updatedComments));

        // Видалення запису з bookings
        onDelete(master, records.indexOf(selectedRecord));
    };

    return (
        <>
            <Card sx={{ mb: 3, p: 2 }}>
                {/* Шапка картки з фото майстра, ім'ям та кількістю записів, з іншим кольором фону */}
                <CardHeader
                    avatar={<Avatar src={photo} alt={master} />}
                    title={master}
                    subheader={`Кількість записів: ${records.length}`}
                    action={
                        <IconButton
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            {expanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    }
                    sx={{
                        borderBottom: "1px solid #e0e0e0",
                        mb: 2,
                        bgcolor: "#f5f5f5", // Інший колір для шапки
                        cursor: "pointer", // Вказівник миші у вигляді руки
                    }}
                    onClick={handleExpandClick} // Розгортання при натисканні на шапку
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {records.length === 0 ? (
                            <Typography variant="body1" align="center">
                                Майстер не має записів.
                            </Typography>
                        ) : (
                            <List>
                                {records.map((record, index) => (
                                    <ListItem
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <ListItemText
                                            primary={`${formatDate(
                                                record.date
                                            )} | ${record.time} - ${
                                                record.finishTime
                                            }`}
                                            secondary={`${record.service} - ${record.customer.name} (+38${record.customer.phone})`}
                                            sx={{
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                mr: 2,
                                            }}
                                        />
                                        {/* Кнопки біля кожного запису */}
                                        <Box>
                                            <IconButton
                                                aria-label="add to favorites"
                                                onClick={() =>
                                                    handleOpenReview(record)
                                                } // Відкриття попапу з формою відгуку
                                            >
                                                <Star />
                                            </IconButton>
                                            <IconButton
                                                aria-label="delete"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Запобігає розгортанню при натисканні на кнопку
                                                    onDelete(master, index); // Виклик функції onDelete з індексом запису
                                                }}
                                            >
                                                <Delete />
                                            </IconButton>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </CardContent>
                </Collapse>
            </Card>
            {/* Вікно для додавання відгуку */}
            {selectedRecord && (
                <ReviewPopup
                    open={reviewOpen}
                    onClose={handleCloseReview}
                    master={master}
                    record={selectedRecord}
                    onSaveReview={handleSaveReview} // Збереження відгуку та видалення запису
                />
            )}
        </>
    );
};

export default BookingCard;