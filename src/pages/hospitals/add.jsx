import { useState } from "react";
import PageTitle from "../../components/page_title";
import {
  Container,
  FormControl,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Paper,
} from "@mui/material";

const AddHospital = () => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Grid container mb={1}>
        <Grid item lg={12}>
          <PageTitle>Add Hospital</PageTitle>
        </Grid>
      </Grid>

      <Container>
        <Paper elevation={2}>
          <Grid container spacing={2} p={5}>
            <Grid item lg={6}>
              <TextField id="name" label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                id="ratings"
                label="ratings"
                type="number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                id="opening_hours"
                label="Opeaning Hours"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                id="primary_phone"
                label="Primary Phone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                id="secondary_phone"
                label="Secondary Phone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <TextField
                id="about"
                label="About"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="status"
                  onChange={handleChange}
                >
                  <MenuItem value={"active"}>Active</MenuItem>
                  <MenuItem value={"inactive"}>Inactive</MenuItem>
                  <MenuItem value={"delete"}>Delete</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box pb={5} display={"flex"} justifyContent={"center"}>
            <Button variant="contained" color="success">
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default AddHospital;
