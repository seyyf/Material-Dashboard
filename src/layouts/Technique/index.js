import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Candidat from "layouts/authentication/TestComponents/Candidat";
import TestLayout from "../authentication/components/TestLayout";

function TestTechnique() {
  return (
    <TestLayout>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" gap={3}>
          <Box display="flex" justifyContent="space-between" paddingTop={2}>
            <Typography>Dashboard</Typography>
            <Button
              style={{
                background: "#62A5FF",
                borderRadius: "50px",
                color: "white",
                textTransform: "none",
              }}
            >
              <AddCircleIcon sx={{ marginRight: "10px" }} color="white" />
              Publier une annonce
            </Button>
          </Box>
          <Box
            sx={{ background: "white", borderRadius: "0.5rem" }}
            coloredShadow="dark"
            padding={2}
          >
            <Typography>Candidats</Typography>
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="140px"
              gap="20px"
            >
              <Box gridColumn="span 3" alignItems="center" justifyItems="center" display="flex">
                <Candidat number="120" text="Candidatures" />
              </Box>
              <Box gridColumn="span 3" alignItems="center" justifyItems="center" display="flex">
                <Candidat number="120" text="Candidatures" />
              </Box>
              <Box gridColumn="span 3" alignItems="center" justifyItems="center" display="flex">
                <Candidat number="120" text="Candidatures" />
              </Box>
              <Box gridColumn="span 3" alignItems="center" justifyItems="center" display="flex">
                <Candidat number="120" text="Candidatures" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </TestLayout>
  );
}

export default TestTechnique;
