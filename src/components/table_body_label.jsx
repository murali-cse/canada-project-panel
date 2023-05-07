import PropTypes from "prop-types";

const TableBodyLabel = ({ children }) => {
  return (
    <span style={{ fontFamily: "Poppins", fontSize: "14px" }}>{children}</span>
  );
};

TableBodyLabel.propTypes = {
  children: PropTypes.element,
};

export default TableBodyLabel;
