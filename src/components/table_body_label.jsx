import PropTypes from "prop-types";

const TableBodyLabel = ({ noWrap = false, children = null }) => {
  return (
    <span
      className={noWrap ? "text-nowrap" : ""}
      style={{ fontFamily: "Poppins", fontSize: "14px" }}
    >
      {children}
    </span>
  );
};

TableBodyLabel.propTypes = {
  children: PropTypes.element,
};

export default TableBodyLabel;
