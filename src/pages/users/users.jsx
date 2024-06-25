import PageTitle from "../../components/page_title";
import MUIDataTable from "mui-datatables";
import TableHeaderLabel from "../../components/table_header_label";
import TableBodyLabel from "../../components/table_body_label";
import { ThemeProvider } from "@mui/material/styles";
import muiTableTheme from "../../themes/mui_table_theme";
import "../../assets/css/mui_table.css";
import { Grid, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useFetchUser } from "../../services/user_service.js";

const Users = () => {
  const { data, error, isLoading } = useFetchUser();

  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              {columnMeta.label}
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return <TableBodyLabel>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              {columnMeta.label}
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return <TableBodyLabel noWrap={true}>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "dob",
      label: "DOB",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              {columnMeta.label}
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return <TableBodyLabel noWrap={true}>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "phone",
      label: "Phone",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              {columnMeta.label}
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return <TableBodyLabel noWrap={true}>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              {columnMeta.label}
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return <TableBodyLabel>{value}</TableBodyLabel>;
        },
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              <span>{columnMeta.label}</span>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return (
            <Stack direction={"row"} spacing={1}>
              <Link to={"details/2"}>
                <button className="btn btn-success btn-sm ">View</button>
              </Link>
              <Link to={"/"}>
                <button className="btn btn-primary btn-sm ">Edit</button>
              </Link>
              <button className="btn btn-danger btn-sm " onClick={notify}>
                Delete
              </button>
            </Stack>
          );
        },
      },
    },
  ];

  const options = {
    selectableRowsOnClick: false,
    viewColumns: false,
    elevation: 0,
    jumpToPage: false,
    selectableRows: "none",
    responsive: "vertical",
    print: false,
    filter: false,
  };

  const notify = () => {};

  if (isLoading) return <>Loading... </>;

  if (error) return <>Something went wrong</>;

  return (
    <>
      {/** grid */}
      <Grid container>
        <Grid item lg={6}>
          <PageTitle>Users</PageTitle>
        </Grid>
        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button variant="contained" color="success">
              Add User
            </Button>
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
                  title={""}
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
