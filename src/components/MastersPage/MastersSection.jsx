import { Box, Container, Grid, Typography } from "@mui/material";

import MasterCard from "./MasterCard"; // Імпортуємо компонент MasterCard
import React from "react";
import masters from "./masters"; // Імпортуємо масив майстрів з файлу masters.js

const MastersSection = () => {
    return (
        <Box sx={{ backgroundColor: "#fafafa", py: 5 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                >
                    Наші Майстри
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Познайомтеся з нашими досвідченими та талановитими
                    майстрами, які готові надати вам широкий спектр професійних
                    послуг.
                </Typography>
                <Grid container spacing={4} sx={{ mt: 3 }}>
                    {masters.map((master, index) => (
                        <Grid item xs={12} key={index}>
                            <MasterCard
                                masterName={master.name}
                                masterPhoto={master.photo}
                                rating={master.rating}
                                services={master.services}
                                position={master.position}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MastersSection;