import "./OrderDetails.scss";
import { useState } from "react";
import { Collapse, Modal } from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import StepProgressbar from "../../../../components/StepProgressbar/StepProgressbar";
import artImg from "../../../../assets/arts/art (5).png";
import { domainName } from "../../../../Constants";

const OrderDetails = ({
  order,
  setShowCancelConfirm,
  setCancellingOrderId,
}) => {
  const [open, setOpen] = useState(false);

  function formatDate(inputDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateObj = new Date(inputDate);

    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`;

    return `${formattedDate}, ${formattedTime}`;
  }

  const date = formatDate(order.create_at);
  const updatedDate = formatDate(order.update_at);

  const totalAmount = order.total_amount.toLocaleString("en-IN");

  const handleCancelClick = () => {
    setShowCancelConfirm(true);
    setCancellingOrderId(order.id);
  };

  return (
    <div className="details-div">
      <div
        className="summary-details"
        aria-controls="expanded-order-details"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>Order ID : {order.id}</span>
        <span>Order Placed : {date}</span>
        <span>Order Amount: ₹{totalAmount}</span>
        {order.status === "Delivered" && (
          <span>Order delivered: {updatedDate}</span>
        )}
        {open ? (
          <AiFillCaretUp className="icon" />
        ) : (
          <AiFillCaretDown className="icon" />
        )}
      </div>
      <Collapse in={open}>
        <div className="expanded-order-details">
          {order.status === "Delivered" && (
            <span>Order delivered: {updatedDate}</span>
          )}
          <StepProgressbar orderStatus={order.status} />
          {order.product.map((product) => (
            <div className="art-details" key={product.productDetail.id}>
              <img
                src={`${domainName}/uploads/${product.productDetail.main_image}`}
                alt="art"
              />
              <div className="details">
                <div className="info">
                  <span>{product.productDetail.title}</span>
                  <span>{product.productDetail.owner}</span>
                  <span>
                    Categories : {product.productDetail.category__title}
                    {/* | Weight : 10 kg  */}
                    {/* | Dimensions : 40 × 50 × 70
                  cm */}
                  </span>
                  <span>Quantity : {product.quantity}</span>
                  <span>
                    ₹{product.productDetail.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="buttons">
                  <button className="btn-primary button">Buy it again</button>
                  <button className="btn-secondary button">
                    Product Invoice
                  </button>
                  <button className="btn-secondary button">
                    Write product review
                  </button>
                  {order.status === "Received" || order.status === "Packed" ? (
                    <button
                      className="btn-cancel button"
                      onClick={handleCancelClick}
                    >
                      Cancel Order
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default OrderDetails;
