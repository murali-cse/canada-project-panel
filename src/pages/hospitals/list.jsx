import React from "react";

import PageTitle from "../../components/page_title";
import MUIDataTable from "mui-datatables";
import TableHeaderLabel from "../../components/table_header_label";
import TableBodyLabel from "../../components/table_body_label";
import { ThemeProvider } from "@mui/material/styles";
import muiTableTheme from "../../themes/mui_table_theme";
import "../../assets/css/mui_table.css";
import { Grid, Chip, Tooltip, Stack } from "@mui/material";
import PrimaryButton from "../../components/buttons/primary_button";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListHospitals = () => {
  const columns = [
    {
      name: "id",
      label: "Id",
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
            <TableBodyLabel>
              <span>{value}</span>
            </TableBodyLabel>
          );
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
              <div className="text-nowrap">{columnMeta.label}</div>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return (
            <TableBodyLabel>
              <span>{value}</span>
            </TableBodyLabel>
          );
        },
      },
    },
    {
      name: "address",
      label: "Address",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              <div>{columnMeta.label}</div>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return (
            <TableBodyLabel>
              <Tooltip title={value}>
                <div
                  className="d-inline-block text-truncate"
                  style={{ maxWidth: "150px" }}
                >
                  {value}
                </div>
              </Tooltip>
            </TableBodyLabel>
          );
        },
      },
    },
    {
      name: "opening_hours",
      label: "Opening Hours",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              <div className="text-nowrap">{columnMeta.label}</div>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return (
            <TableBodyLabel>
              <span>{value}</span>
            </TableBodyLabel>
          );
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
              <span>{columnMeta.label}</span>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return (
            <TableBodyLabel>
              <span>{value}</span>
            </TableBodyLabel>
          );
        },
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              <span>{columnMeta.label}</span>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          let color = "#10623D";

          switch (value) {
            case "active":
              color = "#10623D";
              break;
            case "inactive":
              color = "#B6B6B6";
              break;
            case "deleted":
              color = "#C93743";
              break;
            default:
              color = "#10623D";
              break;
          }

          return (
            <TableBodyLabel>
              <Chip
                label={value}
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: color,
                  color: value == "inactive" ? "black" : "white",
                }}
              />
            </TableBodyLabel>
          );
        },
      },
    },
    {
      name: "updated_at",
      label: "Updated At",
      options: {
        customHeadRender: (columnMeta) => {
          return (
            <TableHeaderLabel key={columnMeta.label}>
              <div className="text-nowrap">{columnMeta.label}</div>
            </TableHeaderLabel>
          );
        },
        customBodyRender: (value) => {
          return (
            <TableBodyLabel>
              <span>{value}</span>
            </TableBodyLabel>
          );
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

  const data = [
    {
      id: 1,
      name: "Orci Phasellus PC",
      address: "4421 Dictum. Rd.",
      opening_hours: "8",
      phone: "(523) 613-0085",
      status: "deleted",
      updated_at: "14-2-2024 10:39 AM",
    },
    {
      id: 2,
      name: "Nullam Feugiat Limited",
      address: "P.O. Box 717, 5309 Cubilia St.",
      opening_hours: "5",
      phone: "(339) 736-4425",
      status: "inactive",
      updated_at: "1-1-2025 09:59 AM",
    },
    {
      id: 3,
      name: "Ridiculus Mus Corporation",
      address: "9159 Orci Road",
      opening_hours: "6",
      phone: "(729) 562-8591",
      status: "active",
      updated_at: "26-11-2024 02:47 AM",
    },
    {
      id: 4,
      name: "Interdum Feugiat Sed LLP",
      address: "Ap #806-8387 Neque Ave",
      opening_hours: "8",
      phone: "1-859-521-8610",
      status: "inactive",
      updated_at: "16-7-2023 07:25 PM",
    },
    {
      id: 5,
      name: "Iaculis Enim Sit Ltd",
      address: "Ap #482-6920 Donec Rd.",
      opening_hours: "6",
      phone: "(469) 411-7617",
      status: "active",
      updated_at: "8-8-2024 11:55 PM",
    },
  ];

  const options = {
    // filterType: "checkbox",
    selectableRowsOnClick: false,
    viewColumns: false,
    elevation: 0,
    jumpToPage: false,
    selectableRows: "none",
    responsive: "simple",
    print: false,
    filter: false,
  };

  const notify = () =>
    toast("Testing..", {
      closeOnClick: true,
    });

  return (
    <div>
      <ToastContainer theme="dark" />
      <Grid container mb={1}>
        <Grid item lg={8}>
          <PageTitle>Hospitals</PageTitle>
        </Grid>
        <Grid item lg={4} display={"flex"} justifyContent={"end"}>
          <Link to={"add"}>
            <PrimaryButton>Add Hospital</PrimaryButton>
          </Link>
        </Grid>
      </Grid>

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              {/* <h4 className="card-title mb-4">Latest Transaction</h4> */}
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
    </div>
  );
};

export default ListHospitals;
