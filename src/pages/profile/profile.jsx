import { Box, Container } from "@mui/material";
import React from "react";
import ComingSoon from "../../components/coming_soon";

const Profile = () => {
  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ComingSoon />
      </Box>
    </Container>
  );
};

export default Profile;
