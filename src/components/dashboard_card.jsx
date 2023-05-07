import React from "react";

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="card mini-stats-wid">
      <div className="card-body">
        <div className="d-flex">
          <div className="flex-grow-1">
            <p className="text-muted fw-medium">{title}</p>
            <h4 className="mb-0">{count}</h4>
          </div>

          <div className="flex-shrink-0 align-self-center">
            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
              <span className="avatar-title">
                <i className={`${icon ?? "bx bx-receipt"} font-size-24`}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
