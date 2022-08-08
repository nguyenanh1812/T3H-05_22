import React from "react";
import "../../../App.css";
// import { data } from "../../../constants";

function TotalMoney({ data }) {
  return (
    <div className="row alert-success alert text-gray">
      <div className="col-md-6">
        <h4>Packges Includes</h4>
        <h3>Name:</h3>
      </div>
      <div className="col-md-6">
        <div className="total-containt">
          <div className="d-flex justify-content-between mb-2">
            <div className="h5">Sub Total:</div>
            <div className="h5">$ 2.654</div>
            <div className="h5">-$2.233</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="h4">TOTAL AMOUNT:</div>
            <div className="h4">$2.654</div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default TotalMoney;
