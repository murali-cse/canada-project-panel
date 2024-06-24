import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  styled,
  Chip,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/page_title";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Title = styled("p")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "700",
  color: "#495057",
}));

const SubTitle = styled("p")(({ theme }) => ({
  fontSize: "14px",
  color: "#6c757d",
}));

const HospitalDetails = () => {
  const [open, setOpen] = useState(false);

  // to get the params id
  const { id } = useParams();

  const images = [
    "https://media.istockphoto.com/id/1364075546/photo/empty-corridor-in-modern-hospital-with-information-counter-and-hospital-bed-in-rooms-3d.jpg?s=612x612&w=0&k=20&c=xxFDmIVpH1wJaaiorpvfzec4RRggSb48PDb_dU9bTjo=",
    "https://img.freepik.com/free-psd/hallway-emergency-room-generative-ai_587448-2190.jpg",
    "https://media.post.rvohealth.io/wp-content/uploads/2020/08/hospital-acquired-nosocomial-infections_thumb.jpg",
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container mb={1}>
        <Grid item lg={6}>
          <PageTitle>Hospital Details</PageTitle>
        </Grid>
        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"end"} gap={2}>
            <Button variant="contained" startIcon={<ModeIcon />}>
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleClickOpen}
            >
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Paper elevation={2}>
        <Grid container p={5}>
          <Grid item lg={4}>
            <Title>Id</Title>
            <SubTitle>12345</SubTitle>
          </Grid>
          <Grid item lg={4}>
            <Title>Name</Title>
            <SubTitle>Hospital name</SubTitle>
          </Grid>
          <Grid item lg={4}>
            <Title>Address</Title>
            <SubTitle>Address </SubTitle>
          </Grid>
          <Grid item lg={4}>
            <Title>Ratings</Title>
            <SubTitle>5</SubTitle>
          </Grid>
          {/* primary phone */}
          <Grid item lg={4}>
            <Title>Primary Phone</Title>
            <SubTitle>Phone number</SubTitle>
          </Grid>
          {/* secondary Phone */}
          <Grid item lg={4}>
            <Title>Secondary Phone</Title>
            <SubTitle>Phone number</SubTitle>
          </Grid>
          {/* opening hours */}
          <Grid item lg={4}>
            <Title>Opening Hours</Title>
            <SubTitle>24 Hours</SubTitle>
          </Grid>
          {/* status */}
          <Grid item lg={4}>
            <Title>Status</Title>
            <Chip color="success" label="Active" />
          </Grid>
        </Grid>
        <Divider />
        <Box p={5}>
          <Title>About</Title>
          <SubTitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            in aspernatur qui ullam quos corporis alias similique nostrum rerum
            sequi error quam, quaerat dignissimos nihil optio modi maxime quod
            cum.
          </SubTitle>
        </Box>
        <Divider />
        <Box p={5}>
          <Title>Images</Title>
          <Stack direction={"row"} gap={2}>
            {images.map((e, i) => {
              return (
                <img
                  key={i}
                  src={e}
                  alt="hospital photo"
                  style={{
                    height: "150px",
                    width: "250px",
                    objectFit: "cover",
                  }}
                />
              );
            })}
          </Stack>
        </Box>
      </Paper>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Hospital"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            blanditiis cumque fuga enim neque beatae quae voluptatum consequatur
            consequuntur obcaecati praesentium sequi, libero hic rerum soluta,
            porro, itaque cum debitis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HospitalDetails;
