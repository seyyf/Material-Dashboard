import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import RunningWithErrorsOutlinedIcon from "@mui/icons-material/RunningWithErrorsOutlined";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Annonce from "layouts/authentication/TestComponents/Annonce";
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
                <Candidat number="64" text="Nouveaux profils" />
              </Box>
              <Box gridColumn="span 3" alignItems="center" justifyItems="center" display="flex">
                <Candidat number="64" text="Dossiers intéressants" />
              </Box>
              <Box gridColumn="span 3" alignItems="center" justifyItems="center" display="flex">
                <Candidat number="535" text="Dossiers favoris" />
              </Box>
            </Box>
          </Box>
          <Box
            coloredShadow="dark"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="100%"
            gap="20px"
          >
            <Box
              gridColumn="span 3"
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{ background: "white", borderRadius: "0.5rem" }}
              padding={2}
            >
              <Typography>Annonces</Typography>

              <Box>
                <Annonce
                  icon={
                    <PlayArrowOutlinedIcon
                      sx={{ color: "#28C76F", background: "#00ba6224", borderRadius: "50px" }}
                      fontSize="large"
                    />
                  }
                  number="23"
                  text="En ligne"
                />
                <Annonce
                  icon={
                    <DriveFileRenameOutlineOutlinedIcon
                      sx={{
                        color: "#62A5FF",
                        background: "#4fc3f726",
                        borderRadius: "50px",
                        padding: "3px",
                      }}
                      fontSize="large"
                    />
                  }
                  number="23"
                  text="Brouillon"
                />
                <Annonce
                  icon={
                    <PauseOutlinedIcon
                      sx={{
                        color: "#6E6B7B",
                        background: "#1e1e1e24",
                        borderRadius: "50px",
                        padding: "3px",
                      }}
                      fontSize="large"
                    />
                  }
                  number="23"
                  text="Désactivées"
                />
                <Annonce
                  icon={
                    <RunningWithErrorsOutlinedIcon
                      sx={{
                        color: "#EA5455",
                        background: "#ff0a0026",
                        borderRadius: "50px",
                        padding: "3px",
                      }}
                      fontSize="large"
                    />
                  }
                  number="23"
                  text="Expirées"
                />
                <Annonce
                  icon={
                    <Inventory2OutlinedIcon
                      sx={{
                        color: "#5E5873",
                        background: "#1e1e1e21",
                        borderRadius: "50px",
                        padding: "6px",
                      }}
                      fontSize="large"
                    />
                  }
                  number="23"
                  text="Archivées"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </TestLayout>
  );
}

export default TestTechnique;
