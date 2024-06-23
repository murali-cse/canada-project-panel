import PropTypes from "prop-types";

const TableBodyLabel = (props) => {
  const { noWrap = false, children = null } = props || {};
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
