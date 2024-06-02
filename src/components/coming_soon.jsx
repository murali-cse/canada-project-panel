import { Stack, Box } from "@mui/material";

const ComingSoon = () => {
  return (
    <Stack alignItems={"center"}>
      <img
        src="assets/vectors/coming_soon.svg"
        alt="insurance coming soon"
        width={"40%"}
        srcSet="assets/vectors/coming_soon.svg"
      />
      <Box alignItems={"center"} mt={8} textAlign={"center"}>
        <h3 style={{ marginBottom: "10px" }}>
          Shhh... we're working on something magical!
        </h3>
        <h4>
          We can't wait to share it with you soon. Thanks for your patience. ✨
        </h4>
      </Box>
    </Stack>
  );
};

export default ComingSoon;
