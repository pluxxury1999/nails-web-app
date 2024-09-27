// CategoryList.js

import { Box, Container, Typography } from "@mui/material";

import CategoryCard from "./CategoryCard"; // Імпортуємо компонент CategoryCard
import React from "react";
import categorizedServices from "./categories"; // Імпортуємо об'єкт категорій

const CategoryList = () => {
    return (
        <Container sx={{ mt: 4 }}>
            {/* Контейнер з Flexbox для горизонтального розташування карток */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column", // Відображення карток в стовпчик
                    gap: 3, // Відступ між картками
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                >
                    Послуги які ми надаємо
                </Typography>
                {categorizedServices.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </Box>
        </Container>
    );
};

export default CategoryList;