import PageTitle from "../../components/page_title";
import MUIDataTable from "mui-datatables";
import TableHeaderLabel from "../../components/table_header_label";
import TableBodyLabel from "../../components/table_body_label";
import { ThemeProvider } from "@mui/material/styles";
import muiTableTheme from "../../themes/mui_table_theme";
import "../../assets/css/mui_table.css";
import { Grid, Box, Button } from "@mui/material";

const Users = () => {
  const columns = [
    {
      name: "Name",
      options: {
        customHeadRender: (columnMeta) => {
          return <TableHeaderLabel>{columnMeta.label}</TableHeaderLabel>;
        },
        customBodyRender: (value) => {
          return <TableBodyLabel>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "Company",
      options: {
        customHeadRender: (columnMeta) => {
          return <TableHeaderLabel>{columnMeta.label}</TableHeaderLabel>;
        },
        customBodyRender: (value) => {
          return <TableBodyLabel>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "City",
      options: {
        customHeadRender: (columnMeta) => {
          return <TableHeaderLabel>{columnMeta.label}</TableHeaderLabel>;
        },
        customBodyRender: (value) => {
          return <TableBodyLabel>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "State",
      options: {
        customHeadRender: (columnMeta) => {
          return <TableHeaderLabel>{columnMeta.label}</TableHeaderLabel>;
        },
        customBodyRender: (value) => {
          return <TableBodyLabel>{value}</TableBodyLabel>;
        },
      },
    },
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    // filterType: "checkbox",
    selectableRowsOnClick: false,
    viewColumns: false,
    elevation: 0,
    jumpToPage: false,
    selectableRows: "none",
    responsive: "standard",
    print: false,
    filter: false,
  };

  return (
    <>
      {/** grid */}
      <Grid container>
        <Grid item lg={6}>
          <PageTitle>Users</PageTitle>
        </Grid>
        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button variant="contained">Add User</Button>
          </Box>
        </Grid>
      </Grid>
      <br />
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <ThemeProvider theme={muiTableTheme()}>
                <MUIDataTable
                  title={"Users List"}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
