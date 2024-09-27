import { Box, Button, Container, Grid, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/system";

const HeroSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f8f8f8",
                padding: "50px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Ліва частина - текст */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: "bold" }}
                        >
                            Знайомтесь з нашими талановитими майстрами
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            paragraph
                        >
                            Наша команда професійних і досвідчених майстрів
                            краси готова надати вам виняткові послуги, які
                            допоможуть вам виглядати і почуватися на всі 100%.
                            Від зачісок до макіяжу, наші експерти перетворять
                            ваші бажання в реальність.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Дізнатися про послуги
                        </Button>
                    </Grid>

                    {/* Права частина - зображення */}
                    <Grid item xs={12} md={6}>
                        <StyledImageContainer>
                            <img
                                src="/img/ourTeam.webp"
                                alt="Команда майстрів"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        </StyledImageContainer>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const StyledImageContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "10px",
});

export default HeroSection;