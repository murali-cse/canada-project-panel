import PageTitle from "../../components/page_title";
import { Grid } from "@mui/material";

const AddHospital = () => {
  return (
    <div>
      <Grid container mb={1}>
        <Grid item lg={12}>
          <PageTitle>Add Hospital</PageTitle>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddHospital;
