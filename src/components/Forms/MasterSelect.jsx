import { Box, Button, Grid, Typography } from "@mui/material";

import React from "react";

const MasterSelect = ({ masters, onSelect }) => {
    return (
        <Grid container spacing={2}>
            {masters.map((master, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Box
                        sx={{
                            border: "1px solid #ddd",
                            borderRadius: 2,
                            p: 2,
                            textAlign: "center",
                            cursor: "pointer",
                            "&:hover": {
                                borderColor: "primary.main",
                            },
                        }}
                        onClick={() => onSelect(master)} // Вибір майстра
                    >
                        <Typography variant="h6">{master.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {master.position}
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            sx={{ mt: 1 }}
                        >
                            Вибрати
                        </Button>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default MasterSelect;