import { Box, Typography } from "@mui/material";

import React from "react";

const AdminFooter = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#333",
                color: "#fff",
                textAlign: "center",
                py: 2, // Відступи зверху та знизу
                mt: "auto", // Дозволяє футеру залишатися внизу сторінки
                position: "relative",
                bottom: 0,
                width: "100%",
                boxShadow: "0px -1px 5px rgba(0,0,0,0.2)", // Легка тінь для футера
            }}
        >
            <Typography variant="body2">
                © 2024 Beauty Studio. Всі права захищені.
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                Панель адміністратора - управління записами та клієнтами
            </Typography>
        </Box>
    );
};

export default AdminFooter;