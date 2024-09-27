import { Box, Button, Modal, Typography } from "@mui/material";

import React from "react";

const ContactInfoPopup = ({ isOpen, onClose }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    p: 4,
                    width: "400px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    margin: "0 auto",
                    mt: 10,
                    boxShadow: 24,
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Зв'яжіться з нами
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    Ви можете зв'язатися з нами за телефоном або написати нам
                    електронного листа. Ми завжди раді допомогти вам знайти те,
                    що вам потрібно!
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    <strong>Телефон:</strong> +38 (123) 456-78-90
                    <br />
                    <strong>Email:</strong> info@beautystudio.com
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onClose}
                    sx={{ mt: 3 }}
                >
                    Закрити
                </Button>
            </Box>
        </Modal>
    );
};

export default ContactInfoPopup;