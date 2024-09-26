import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

// Дані про послуги для демонстрації
const services = [
    {
        title: "Haircut & Styling",
        description:
            "Professional haircut and styling services to give you a fresh and modern look.",
        image: "/img/haircut.jpg",
    },
    {
        title: "Manicure & Pedicure",
        description:
            "Treat yourself with our manicure and pedicure services for perfect nails.",
        image: "/img/manicure.webp",
    },
    {
        title: "Facial Treatments",
        description:
            "Rejuvenate your skin with our specialized facial treatments.",
        image: "/img/facial.webp",
    },
    {
        title: "Massage Therapy",
        description:
            "Relax and unwind with our soothing massage therapy sessions.",
        image: "/img/massage.webp",
    },
];

// Стиль для карток з ефектом hover
const StyledCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
        transform: "translateY(-5px)", // Зміщення картки вгору
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)", // Збільшуємо тінь
    },
}));

const ServicesSection = () => {
    return (
        <Box sx={{ backgroundColor: "#fafafa", py: 5 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                >
                    Our Services
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Discover our range of professional beauty services designed
                    to help you look and feel your best.
                </Typography>
                <Grid container spacing={4} sx={{ mt: 3 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <StyledCard>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={service.image}
                                    alt={service.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        gutterBottom
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
                {/* Кнопка для переходу на сторінку з усіма послугами */}
                <Box textAlign="center" sx={{ mt: 6 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/services" // Шлях до сторінки з усіма послугами
                        size="large"
                    >
                        View All Services
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ServicesSection;