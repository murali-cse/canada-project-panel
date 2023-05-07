import { createTheme } from "@mui/material/styles";

const muiTableTheme = () =>
  createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "poppins",
            fontSize: "17px",
          },
        },
      },
      MuiTablePagination: {
        styleOverrides: {
          selectLabel: {
            margin: 0,
            fontFamily: "poppins",
          },
          displayedRows: {
            margin: 0,
            fontFamily: "poppins",
          },
          input: {
            fontFamily: "poppins",
          },
        },
      },
    },
  });

export default muiTableTheme;
