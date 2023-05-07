import React from "react";
import PageTitle from "../components/page_title";
import RoundedButton from "../components/rounded_button";
import CustomButton from "../components/custom_button";

const Issues = () => {
  return (
    <>
      <PageTitle title={"Issues"} />
      <div className="row">
        <div className="col-12">
          <RoundedButton>Ok</RoundedButton>
          <CustomButton>Ok</CustomButton>
        </div>
      </div>
    </>
  );
};

export default Issues;
