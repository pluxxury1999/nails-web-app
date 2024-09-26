import React from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    IconButton,
    Link as MuiLink,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#333", color: "#fff", py: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Контактна інформація */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            123 Main Street, City Center
                        </Typography>
                        <Typography variant="body2">
                            Phone: +123 456 789
                        </Typography>
                        <Typography variant="body2">
                            Email: info@beautystudio.com
                        </Typography>
                    </Grid>

                    {/* Швидкі посилання */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <MuiLink
                                component={Link}
                                to="/"
                                sx={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    mb: 1,
                                    fontFamily: "Roboto, sans-serif", // Зміна шрифту
                                    fontWeight: "500",
                                    "&:hover": {
                                        color: "secondary.main", // Колір при наведенні
                                    },
                                }}
                            >
                                Home
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to="/masters"
                                sx={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    mb: 1,
                                    fontFamily: "Roboto, sans-serif", // Зміна шрифту
                                    fontWeight: "500",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                Masters
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to="/services"
                                sx={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    mb: 1,
                                    fontFamily: "Roboto, sans-serif", // Зміна шрифту
                                    fontWeight: "500",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                Services
                            </MuiLink>
                        </Box>
                    </Grid>

                    {/* Соціальні мережі */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton
                                component="a"
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "#fff",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "#fff",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "#fff",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Нижній колонтитул */}
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                        &copy; 2024 Beauty Studio. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;