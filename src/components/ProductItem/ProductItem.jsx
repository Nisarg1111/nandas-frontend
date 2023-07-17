import { FaHeart } from "react-icons/fa";
import TickIcon from "../../assets/images/tick-bg-blue.png";
import "./ProductItem.scss";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";

export const ProductItem = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="art slider-item">
      <img
        onClick={() => navigate("/product-details")}
        src={item}
        alt="product-image"
        className="slider-img"
      />
      <div className="details">
        <div className="flex-between">
          <span>Structural Landscape</span>
          {liked ? (
            <FaHeart
              color="red"
              className="heart-icon heart-filled-icon icon-heart"
              onClick={() => setLiked(false)}
            />
          ) : (
            <AiOutlineHeart
              className="heart-icon outline-heart-icon icon-heart"
              onClick={() => setLiked(true)}
            />
          )}
        </div>

        <div className="flex-column">
          <span>Gregg Rosen/Paintings</span>
          <span className="price">₹1,85,323.00</span>
          <span>EMI starts at ₹6045/month.</span>
          <span className="flex-end">
            <img src={TickIcon} alt="tick-icon" />
            <span>Available For Rent</span>
          </span>
        </div>
      </div>
    </div>
  );
};
