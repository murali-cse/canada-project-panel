import PageTitle from "../components/page_title";
import MUIDataTable from "mui-datatables";
import TableHeaderLabel from "../components/table_header_label";
import TableBodyLabel from "../components/table_body_label";
import { ThemeProvider } from "@mui/material/styles";
import muiTableTheme from "../themes/mui_table_theme";
import "../assets/css/mui_table.css";

const Hospitals = () => {
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
    <div>
      <PageTitle>Hospitals</PageTitle>

      <div className="row">
        {/* <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Top Cities Selling Product</h4>

              <div className="text-center">
                <div className="mb-4">
                  <i className="bx bx-map-pin text-primary display-4"></i>
                </div>
                <h3>1,456</h3>
                <p>San Francisco</p>
              </div>

              <div className="table-responsive mt-4">
                <table className="table align-middle table-nowrap">
                  <tbody>
                    <tr>
                      <td style={{ width: "30%" }}>
                        <p className="mb-0">San Francisco</p>
                      </td>
                      <td style={{ width: "25%" }}>
                        <h5 className="mb-0">1,456</h5>
                      </td>
                      <td>
                        <div className="progress bg-transparent progress-sm">
                          <div
                            className="progress-bar bg-primary rounded"
                            role="progressbar"
                            style={{ width: "94%" }}
                            aria-valuenow="94"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0">Los Angeles</p>
                      </td>
                      <td>
                        <h5 className="mb-0">1,123</h5>
                      </td>
                      <td>
                        <div className="progress bg-transparent progress-sm">
                          <div
                            className="progress-bar bg-success rounded"
                            role="progressbar"
                            style={{ width: "82%" }}
                            aria-valuenow="82"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0">San Diego</p>
                      </td>
                      <td>
                        <h5 className="mb-0">1,026</h5>
                      </td>
                      <td>
                        <div className="progress bg-transparent progress-sm">
                          <div
                            className="progress-bar bg-warning rounded"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              {/* <h4 className="card-title mb-4">Latest Transaction</h4> */}
              <ThemeProvider theme={muiTableTheme()}>
                <MUIDataTable
                  title={"Hospitals List"}
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

export default Hospitals;
