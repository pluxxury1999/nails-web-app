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
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: "bold" }}
                        >
                            Ласкаво просимо до Beauty Studio
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            paragraph
                        >
                            Відкрийте для себе мистецтво краси з нашими
                            професійними послугами. Ми пропонуємо широкий спектр
                            процедур, щоб ви виглядали та почувалися на всі
                            100%. Запишіться на прийом вже сьогодні та відчуйте
                            трансформацію.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Записатися
                        </Button>
                    </Grid>

                    {/* Права частина - зображення */}
                    <Grid item xs={12} md={6}>
                        <StyledImageContainer>
                            <img
                                src="/img/studio.webp"
                                alt="Beauty Salon"
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