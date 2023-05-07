import React from "react";
import styled from "@emotion/styled";

const TableHeader = styled("h6")({
  margin: 0,
  padding: "16px",
  fontWeight: "bold",
  textTransform: "capitalize",
});

const TableHeaderLabel = ({ children }) => {
  return (
    <th>
      <TableHeader>{children}</TableHeader>
    </th>
  );
};

export default TableHeaderLabel;
