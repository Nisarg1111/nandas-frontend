import React, { useEffect, useState } from "react";
import "./StepProgressbar.scss";

function StepProgressbar({ orderStatus }) {
  const [progressStep, setProgressStep] = useState(3);

  useEffect(() => {
    if (orderStatus === "Received") {
      setProgressStep(1);
    } else if (orderStatus === "Packed") {
      setProgressStep(2);
    } else if (orderStatus === "Out For Delivery") {
      setProgressStep(3);
    } else if (orderStatus === "Completed" || orderStatus === "Return") {
      setProgressStep(4);
    }
  }, [orderStatus]);

  return (
    <div className="main-pb">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <ul id="progressbar" className="text-center">
            <li
              className={
                progressStep > 1 || progressStep === 1
                  ? "active step0"
                  : " step0"
              }
            >
              <span className="below-txt">Order Confirmed</span>
              <div className="below-txt date">April 5th 2023, 5:00 PM</div>
            </li>
            <li
              className={
                progressStep > 2 || progressStep === 2
                  ? "active step0"
                  : " step0"
              }
            >
              <span className="below-txt">Shipped</span>
              <div className="below-txt date">April 5th 2023, 5:00 PM</div>
            </li>
            <li
              className={
                progressStep > 3 || progressStep === 3
                  ? "active step0"
                  : " step0"
              }
            >
              <span className="below-txt">Out for Delivery</span>
              <div className="below-txt date">April 5th 2023, 5:00 PM</div>
            </li>
            <li
              className={
                progressStep > 4 || progressStep === 4
                  ? "active step0"
                  : " step0"
              }
            >
              <span className="below-txt">Delivered</span>
              <div className="below-txt date">April 5th 2023, 5:00 PM</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StepProgressbar;