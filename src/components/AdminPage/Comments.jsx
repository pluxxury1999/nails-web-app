import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import CommentCard from "./CommentCard"; // Імпорт компонента CommentCard
import masters from "../MastersPage/masters"; // Імпорт списку майстрів, оновіть шлях

const Comments = () => {
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        // Отримання даних із localStorage
        const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

        // Додавання фото майстрів до коментарів, якщо фото відсутнє
        const commentsWithPhotos = storedComments.map((commentData) => {
            const masterInfo = masters.find(
                (master) => master.name === commentData.master
            );
            return {
                ...commentData,
                photo: masterInfo ? masterInfo.photo : "",
            };
        });

        setCommentsData(commentsWithPhotos);
    }, []);

    return (
        <Box sx={{ p: 3 }}>
            {commentsData.map((comment, index) => (
                <CommentCard
                    key={index}
                    master={comment.master}
                    photo={comment.photo}
                    comments={comment.comments}
                />
            ))}
        </Box>
    );
};

export default Comments;