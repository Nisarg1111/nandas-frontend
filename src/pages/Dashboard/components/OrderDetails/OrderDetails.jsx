import "./OrderDetails.scss";
import { useState } from "react";
import { Collapse, Modal } from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import StepProgressbar from "../../../../components/StepProgressbar/StepProgressbar";
import artImg from "../../../../assets/arts/art (5).png";
import { domainName } from "../../../../Constants";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { IoCloseSharp } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

const OrderDetails = ({
  order,
  setShowCancelConfirm,
  setCancellingOrderId,
  setShowReturnConfirm,
  setReturningOrderId,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

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

  const handleReturnClick = () => {
    setShowReturnConfirm(true);
    setReturningOrderId(order.id);
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
                onClick={() =>
                  navigate(`/product-info/${product.productDetail.id}`)
                }
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

                  <button
                    className="btn-secondary button"
                    onClick={() => setShowReviewModal(true)}
                  >
                    Write product review
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="bottom-buttons">
            {order.status === "Received" || order.status === "Packed" ? (
              <button className="btn-cancel button" onClick={handleCancelClick}>
                Cancel Order
              </button>
            ) : null}
            {order.status === "Completed" && (
              <button
                className="btn-primary button"
                onClick={handleReturnClick}
              >
                Return Order
              </button>
            )}
            <button
              className="btn-secondary button"
              onClick={() => setShowInvoiceModal(true)}
            >
              Product Invoice
            </button>
          </div>
        </div>
      </Collapse>

      <ProductReviewModal
        show={showReviewModal}
        onHide={() => setShowReviewModal(false)}
        order={order}
      />

      <InvoiceModal
        show={showInvoiceModal}
        onHide={() => setShowInvoiceModal(false)}
        order={order}
      />
    </div>
  );
};

export default OrderDetails;

export const ProductReviewModal = ({ order, ...props }) => {
  const user =
    JSON.parse(localStorage.getItem("user_details")) ||
    JSON.parse(sessionStorage.getItem("user_details"));

  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  console.log(order, "order details");
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="header-offcanvas">
        <span className="h5">Write product review</span>
        <IoCloseSharp className="icon" onClick={() => props.onHide(false)} />
      </div>
      <Modal.Body className="review-content">
        <div className="">
          <span className="profile">
            {!user?.profile_image ? (
              <BsPersonCircle className="icon" />
            ) : (
              <img
                src={`${domainName}${user?.profile_image}`}
                alt="profile"
                className="profile_img"
              />
            )}
            {order.name}
          </span>

          <div className="rating">
            <span>Add Rating</span>
            <Rating onClick={handleRating} initialValue={rating} size={25} />
          </div>
          <div className="input-box">
            <label htmlFor="">Write Review</label>
            <textarea name="" id="" rows="5" />
          </div>
          <div className="buttons">
            <button className="btn-secondary">Cancel</button>
            <button className="btn-primary">Post review</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const InvoiceModal = ({ order, ...props }) => {
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="header-offcanvas">
        <span className="h5">Invoice Details</span>
        <IoCloseSharp className="icon" onClick={() => props.onHide(false)} />
      </div>
      <div className="underline-invoice-header"></div>
      <Modal.Body className="invoice-content">
        <span className="fw-500">Invoice : #{order.id}</span>
        <span className="fw-500">Shipping address</span>
        <div className="address">
          <span>{order?.name}</span>
          <span style={{ textTransform: "uppercase" }}>{order?.address}</span>
          <span>{order?.state}</span>
        </div>
        {order.product.map((item) => (
          <div className="product-details">
            <img
              src={`${domainName}/uploads/${item.productDetail.main_image}`}
              alt="product"
            />
            <div>
              <span className="h5">{item.productDetail.title}</span>
              <span>{item.quantity}</span>
              <span className="h5">
                ₹{item.productDetail.price * item.quantity}
              </span>
            </div>
          </div>
        ))}
        <div className="order-summary">
          <span className="h5">Order Summary</span>
          <div className="underline-invoice-header"></div>
          <div className="flex-between">
            <span>Subtotal</span>
            <span>₹{order.total_amount}</span>
          </div>
          <div className="flex-between">
            <span>Shipping</span>
            <span>-----</span>
          </div>
          <div className="underline-invoice-header"></div>
          <div className="flex-between">
            <span className="h5">Order Total</span>
            <span className="h5">₹{order.total_amount}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
