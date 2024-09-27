import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Rating,
    Typography,
} from "@mui/material";

import { Link } from "react-router-dom"; // Додаємо Link з react-router-dom
import React from "react";
import Slider from "react-slick";
import testimonials from "./testimonials"; // Імпортуємо масив відгуків з файлу testimonials.js

const ReviewSlider = () => {
    // Налаштування для слайдера
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        arrows: false, // Приховуємо стрілочки
    };

    return (
        <Box sx={{ backgroundColor: "#f4f4f4", py: 5 }}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                >
                    Що кажуть наші клієнти
                </Typography>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <Box key={index} sx={{ px: 3 }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: "20px",
                                    maxWidth: "600px", // Збільшуємо ширину картки
                                    margin: "0 auto",
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={2} alignItems="center">
                                    {/* Аватар клієнта */}
                                    <Grid item xs={3}>
                                        <Avatar
                                            alt={testimonial.name}
                                            sx={{ width: 64, height: 64 }}
                                        >
                                            {testimonial.name[0]}
                                        </Avatar>
                                    </Grid>
                                    {/* Відгук клієнта */}
                                    <Grid item xs={9}>
                                        <Typography variant="body1" paragraph>
                                            {testimonial.review}
                                        </Typography>
                                        {/* Зірочки оцінки */}
                                        <Rating
                                            name="read-only"
                                            value={testimonial.rating}
                                            readOnly
                                        />
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontWeight: "bold", mt: 1 }}
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            Послуга: {testimonial.service}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            Майстер: {testimonial.master}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    ))}
                </Slider>
                {/* Кнопка для переходу до майстрів */}
                <Box textAlign="center" sx={{ mt: 6 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/masters" // Шлях до сторінки з майстрами
                        size="large"
                    >
                        Познайомтесь з нашими майстрами
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ReviewSlider;