import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Typography, Container } from "@mui/material";
import L from "leaflet";

// Дефолтна позиція маркера (координати салону)
const salonPosition = [50.4501, 30.5234]; // Заміни на реальні координати вашого салону

// Іконка маркера (за замовчуванням)
const markerIcon = new L.Icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
});

const MapSection = () => {
    return (
        <Box sx={{ backgroundColor: "#f4f4f4", py: 5 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                >
                    Visit Our Salon
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    We are located at the heart of the city. Find us easily on
                    the map below.
                </Typography>
                <Box
                    sx={{
                        height: "400px",
                        width: "100%",
                        mt: 3,
                        borderRadius: "10px",
                        overflow: "hidden",
                    }}
                >
                    <MapContainer
                        center={salonPosition}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={salonPosition} icon={markerIcon}>
                            <Popup>
                                <Typography variant="subtitle1" gutterBottom>
                                    Our Beauty Salon
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    123 Main Street, City Center
                                </Typography>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default MapSection;