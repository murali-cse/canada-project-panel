import React from "react";

const CustomButton = ({ variant, children }) => {
  return (
    <button
      type="button"
      className={`btn btn-${variant ?? "primary"} waves-effect waves-light`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
