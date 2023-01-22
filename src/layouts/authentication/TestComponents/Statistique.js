import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Statistique({ number, text, first }) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography sx={{ fontSize: "25px", fontWeight: "bold", color: `${first ? "#28DAC6" : ""}` }}>
        {number}
      </Typography>
      <Typography sx={{ fontSize: "15px", fontWeight: "thin", color: "grey" }}>{text}</Typography>
    </Box>
  );
}

Statistique.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
};

export default Statistique;
