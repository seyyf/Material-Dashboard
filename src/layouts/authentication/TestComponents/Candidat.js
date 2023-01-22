import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Candidat({ number, text }) {
  return (
    <Box display="flex" gap={3} height="140px">
      <Box marginTop={1}>
        <GroupOutlinedIcon
          sx={{ color: "#62A5FF", background: "#F4F9FE", borderRadius: "50px", padding: "3px" }}
          fontSize="large"
        />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>{number}</Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "thin" }}>{text}</Typography>
        </Box>
        <Button sx={{ background: "#62A5FF", color: "#fff", textTransform: "none" }}>
          Voir les candidatures
        </Button>
      </Box>
    </Box>
  );
}

Candidat.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Candidat;
