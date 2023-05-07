import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6" style={{ textAlign: "end" }}>
              {year} © Faest.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
