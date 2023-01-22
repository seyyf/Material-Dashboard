import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function MultiPosting({ img, title, subTitle, number, subNumber }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
      <Box display="flex" gap={3.5} alignItems="center">
        <Box marginTop={1}>
          <img src={img} alt="" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>{title}</Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "thin", color: "grey" }}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#62A5FF" }}>
          {number}
        </Typography>
        <Typography sx={{ fontSize: "12px", fontWeight: "thin", color: "grey" }}>
          {subNumber}
        </Typography>
      </Box>
    </Box>
  );
}

MultiPosting.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  subNumber: PropTypes.string.isRequired,
};

export default MultiPosting;
