import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Annonce({ icon, number, text }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
      <Box display="flex" gap={3}>
        <Box marginTop={1}>{icon}</Box>
        <Box display="flex" flexDirection="column">
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>{number}</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "thin" }}>{text}</Typography>
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            borderRadius: "5px",
            background: "#62A5FF",
            color: "#fff",
            minWidth: "40px !important",
            width: "40px",
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
}

Annonce.propTypes = {
  icon: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Annonce;
