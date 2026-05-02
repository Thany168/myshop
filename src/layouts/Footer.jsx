import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1.5,
        px: 3,
        mt: "auto",
        bgcolor: "#fff",
        borderTop: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        <Typography
          component="span"
          variant="caption"
          color="primary"
          fontWeight={700}
        >
          KDMV STORE
        </Typography>{" "}
        All rights reserved.
      </Typography>
    </Box>
  );
}
