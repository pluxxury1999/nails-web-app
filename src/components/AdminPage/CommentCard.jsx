import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, Star } from "@mui/icons-material";
import React, { useState } from "react";

const CommentCard = ({ master, photo, comments }) => {
    const [expanded, setExpanded] = useState(false); // Стан для розгортання/згортання списку

    const handleExpandClick = () => {
        setExpanded(!expanded); // Зміна стану розгортання
    };

    return (
        <Card sx={{ mb: 3, p: 2 }}>
            {/* Шапка картки з фото майстра, ім'ям та кількістю коментарів, з іншим кольором фону */}
            <CardHeader
                avatar={<Avatar src={photo} alt={master} />}
                title={master}
                subheader={`Кількість коментарів: ${comments.length}`}
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
                    {comments.length === 0 ? (
                        <Typography variant="body1" align="center">
                            Коментарі відсутні.
                        </Typography>
                    ) : (
                        <List>
                            {comments.map((comment, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 1,
                                            flexWrap: "wrap", // Дозволяє тексту переноситися при необхідності
                                        }}
                                    >
                                        <Box sx={{ flexGrow: 1 }}>
                                            <ListItemText
                                                primary={`${comment.date} | ${comment.service}`}
                                                secondary={`Клієнт: ${comment.customerName} (+38${comment.customerPhone})`}
                                                sx={{
                                                    mb: 1,
                                                    minWidth: "200px", // Мінімальна ширина для інформації
                                                }}
                                            />
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <Star
                                                    key={value}
                                                    sx={{
                                                        color:
                                                            value <=
                                                            comment.rating
                                                                ? "#FFD700"
                                                                : "#E0E0E0", // Жовтий колір для рейтингу
                                                        fontSize: 20,
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </ListItem>
                                    {comment.reviewText && (
                                        <Box
                                            sx={{
                                                bgcolor: "#f0f0f0",
                                                p: 2,
                                                borderRadius: "8px",
                                                mt: 1, // Відступ зверху для розділення з основною інформацією
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                            >
                                                {comment.reviewText}
                                            </Typography>
                                        </Box>
                                    )}
                                    {index < comments.length - 1 && (
                                        <Divider sx={{ mt: 2 }} />
                                    )}
                                </Box>
                            ))}
                        </List>
                    )}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default CommentCard;
