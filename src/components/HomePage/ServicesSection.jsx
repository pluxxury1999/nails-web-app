import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { styled } from "@mui/system";

// Дані про послуги для демонстрації
const services = [
    {
        title: "Стрижка та укладка",
        description:
            "Професійні послуги зі стрижки та укладки, щоб надати вам свіжий та сучасний вигляд.",
        image: "/img/haircut.jpg",
    },
    {
        title: "Манікюр та педикюр",
        description:
            "Побалуйте себе нашими послугами манікюру та педикюру для ідеальних нігтів.",
        image: "/img/manicure.webp",
    },
    {
        title: "Догляд за обличчям",
        description:
            "Оновіть свою шкіру за допомогою наших спеціалізованих процедур для обличчя.",
        image: "/img/facial.webp",
    },
    {
        title: "Масажна терапія",
        description:
            "Розслабтеся та відпочиньте з нашими заспокійливими сеансами масажної терапії.",
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
                    Наші Послуги
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Ознайомтеся з нашим асортиментом професійних послуг краси,
                    розроблених для того, щоб ви виглядали та почувалися на всі
                    100%.
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
                        Переглянути всі послуги
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ServicesSection;