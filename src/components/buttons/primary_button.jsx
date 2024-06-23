import { Button } from "@mui/material";

const PrimaryButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontFamily: "poppins",
        backgroundColor: "#5CB06D",
        "&:hover": {
          backgroundColor: "#4C9A5C",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
