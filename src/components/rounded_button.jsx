import React from "react";

const RoundedButton = ({ variant, children }) => {
  return (
    <button
      type="button"
      className={`btn btn-${
        variant ?? "primary"
      } btn-rounded waves-effect waves-light`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
