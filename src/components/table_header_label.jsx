import styled from "@emotion/styled";
import PropTypes from "prop-types";

const TableHeader = styled("h6")({
  margin: 0,
  padding: "16px",
  fontWeight: "bold",
  textTransform: "capitalize",
});

const TableHeaderLabel = (props) => {
  const { children } = props || {};

  return (
    <th>
      <TableHeader>{children}</TableHeader>
    </th>
  );
};

TableHeaderLabel.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableHeaderLabel;
