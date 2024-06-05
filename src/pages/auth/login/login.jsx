import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Box
        display={"flex"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          gap={2}
          sx={{
            width: {
              lg: 400,
            },
          }}
        >
          <TextField
            id="email"
            label="Email"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
          <Link to={"/"}>
            <Button
              variant={"contained"}
              fullWidth
              sx={{
                boxShadow: 0,
              }}
            >
              Login
            </Button>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
