import { FaHeart } from "react-icons/fa";
import TickIcon from "../../assets/images/tick-bg-blue.png";
import "./ProductItem.scss";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { domainName } from "../../Constants";

export const ProductItem = ({ item}) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="art slider-item"
    >
      <img
        onClick={() => navigate(`/product-info/${item.id}`)}
        src={`${domainName}/uploads/${item.main_image}`}
        alt="product"
        className="slider-img"
      />
      <div className="details">
        <div className="flex-between">
          <span>{item.title}</span>
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
          <span>{item.category__title}</span>
          <span className="price">₹{item.price}</span>
          {item?.emi && <span>EMI starts at ₹6045/month.</span>}
          {item?.available_for_rent && (
            <span className="flex-end">
              <img src={TickIcon} alt="tick-icon" />
              <span>Available For Rent</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
