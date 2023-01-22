import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Box, Button, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import { useTimeline } from "examples/Timeline/context";
import timelineItem from "examples/Timeline/TimelineItem/styles";
import PropTypes from "prop-types";

function NotificationsTimeline({ color, icon, title, subTitle, lastItem, borderColor }) {
  const isDark = useTimeline();

  return (
    <Box position="relative" mb={3} sx={(theme) => timelineItem(theme, { lastItem, isDark })}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={color}
        border={`solid 7px ${borderColor}`}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </Box>
      <Box ml={5.75} pt={0.5} lineHeight={0} maxWidth="30rem">
        <Box display="flex" justifyContent="space-between" gap={0.5}>
          <Box>
            <Typography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
              {title}
            </Typography>
            <Box mt={0.5}>
              <Typography variant="caption" color={isDark ? "secondary" : "text"}>
                {subTitle}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "thin", color: "grey" }}>
              28/03
            </Typography>
            <Button>
              <ArrowCircleRightOutlinedIcon fontSize="large" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

NotificationsTimeline.defaultProps = {
  lastItem: false,
};

NotificationsTimeline.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  lastItem: PropTypes.bool,
};

export default NotificationsTimeline;
