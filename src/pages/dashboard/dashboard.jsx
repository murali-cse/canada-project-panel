import DashboardCard from "../../components/dashboard_card";
import { BoxIcons } from "../../utils/box_icons";
import PageTitle from "../../components/page_title";

const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />

      <div className="row">
        <div className="col-md-4">
          <DashboardCard title={"Orders"} count={"1000"} />
        </div>
        <div className="col-md-4">
          <DashboardCard
            title="Revenue"
            count={"10000"}
            icon={BoxIcons.revenue}
          />
        </div>
        <div className="col-md-4">
          <DashboardCard
            title={"Total Food Items"}
            count={"1000"}
            icon={BoxIcons.food}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Top Cities Selling Product</h4>

              <div className="text-center">
                <div className="mb-4">
                  <i className="bx bx-map-pin text-primary display-4"></i>
                </div>
                <h3>1,456</h3>
                <p>San Francisco</p>
              </div>

              <div className="table-responsive mt-4">
                <table className="table align-middle table-nowrap">
                  <tbody>
                    <tr>
                      <td style={{ width: "30%" }}>
                        <p className="mb-0">San Francisco</p>
                      </td>
                      <td style={{ width: "25%" }}>
                        <h5 className="mb-0">1,456</h5>
                      </td>
                      <td>
                        <div className="progress bg-transparent progress-sm">
                          <div
                            className="progress-bar bg-primary rounded"
                            role="progressbar"
                            style={{ width: "94%" }}
                            aria-valuenow="94"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0">Los Angeles</p>
                      </td>
                      <td>
                        <h5 className="mb-0">1,123</h5>
                      </td>
                      <td>
                        <div className="progress bg-transparent progress-sm">
                          <div
                            className="progress-bar bg-success rounded"
                            role="progressbar"
                            style={{ width: "82%" }}
                            aria-valuenow="82"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0">San Diego</p>
                      </td>
                      <td>
                        <h5 className="mb-0">1,026</h5>
                      </td>
                      <td>
                        <div className="progress bg-transparent progress-sm">
                          <div
                            className="progress-bar bg-warning rounded"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Latest Transaction</h4>
              <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "20px" }}>
                        <div className="form-check font-size-16 align-middle">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="transactionCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="transactionCheck01"
                          ></label>
                        </div>
                      </th>
                      <th className="align-middle">Order ID</th>
                      <th className="align-middle">Billing Name</th>
                      <th className="align-middle">Date</th>
                      <th className="align-middle">Total</th>
                      <th className="align-middle">Payment Status</th>
                      <th className="align-middle">Payment Method</th>
                      <th className="align-middle">View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="transactionCheck02"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="transactionCheck02"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-body fw-bold">
                          #SK2540
                        </a>
                      </td>
                      <td>Neal Matthews</td>
                      <td>07 Oct, 2019</td>
                      <td>$400</td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-11">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1"></i>
                        Mastercard
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                          data-bs-toggle="modal"
                          data-bs-target=".transaction-detailModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="transactionCheck03"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="transactionCheck03"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-body fw-bold">
                          #SK2541
                        </a>
                      </td>
                      <td>Jamal Burnett</td>
                      <td>07 Oct, 2019</td>
                      <td>$380</td>
                      <td>
                        <span className="badge badge-pill badge-soft-danger font-size-11">
                          Chargeback
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1"></i> Visa
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                          data-bs-toggle="modal"
                          data-bs-target=".transaction-detailModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="transactionCheck04"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="transactionCheck04"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-body fw-bold">
                          #SK2542
                        </a>
                      </td>
                      <td>Juan Mitchell</td>
                      <td>06 Oct, 2019</td>
                      <td>$384</td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-11">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-paypal me-1"></i> Paypal
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                          data-bs-toggle="modal"
                          data-bs-target=".transaction-detailModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="transactionCheck05"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="transactionCheck05"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-body fw-bold">
                          #SK2543
                        </a>
                      </td>
                      <td>Barry Dick</td>
                      <td>05 Oct, 2019</td>
                      <td>$412</td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-11">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1"></i>
                        Mastercard
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                          data-bs-toggle="modal"
                          data-bs-target=".transaction-detailModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="transactionCheck06"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="transactionCheck06"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-body fw-bold">
                          #SK2544
                        </a>
                      </td>
                      <td>Ronald Taylor</td>
                      <td>04 Oct, 2019</td>
                      <td>$404</td>
                      <td>
                        <span className="badge badge-pill badge-soft-warning font-size-11">
                          Refund
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1"></i> Visa
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                          data-bs-toggle="modal"
                          data-bs-target=".transaction-detailModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
