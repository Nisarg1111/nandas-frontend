import { FaHeart } from "react-icons/fa";
import TickIcon from "../../assets/images/tick-bg-blue.png";
import "./ProductItem.scss";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { domainName } from "../../Constants";
import { useStateValue } from "../../StateProvider";
import { addToFavorites, removeFromFavorites } from "../../apiCall";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

export const ProductItem = ({ item }) => {
  const [{ favorites, userLoggedIn }, dispatch] = useStateValue();
  const { pathname } = useLocation();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLiked(favorites.some((art) => art.id === parseInt(item.id)));
  }, [favorites, item.id]);

  // add item to favorite list
  const addToFavoritesList = async () => {
    if (!userLoggedIn) {
      navigate("/login");
    } else {
      setLiked(true);
      try {
        const response = await addToFavorites(item.id);
        console.log(response.data, "addToFavorites");
        if (response.data?.status[0].Error === "False") {
          toast.success(`${item.title} added to favorites`);
          dispatch({
            type: "ADD_TO_FAVORITES_LIST",
            item: { ...item, main_image: `/uploads/${item.main_image}` },
          });
        }
      } catch (err) {
        console.log(err, "addToFavorites error");
      }
    }
  };

  // remove item from favorite list
  const removeFromFavoritesList = async () => {
    setLiked(false);
    try {
      const response = await removeFromFavorites(item.id);
      console.log(response.data, "removeFromFavorites");
      if (response.data?.status[0].Error === "False") {
        toast.success(`${item.title} removed from favorites`);
        dispatch({ type: "REMOVE_FROM_FAVORITES_LIST", item: item });
      }
    } catch (err) {
      console.log(err, "removeFromFavorites error");
    }
  };
  return (
    <div className="art slider-item">
      <img
        onClick={() => navigate(`/product-info/${item.id}`)}
        src={
          pathname === "/dashboard/favorites"
            ? `${domainName}${item.main_image}`
            : `${domainName}/uploads/${item.main_image}`
        }
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
              onClick={removeFromFavoritesList}
            />
          ) : (
            <AiOutlineHeart
              className="heart-icon outline-heart-icon icon-heart"
              onClick={addToFavoritesList}
            />
          )}
        </div>

        <div className="flex-column">
          <span>{item.category__title}</span>
          {item?.owner && <span>Owner : {item.owner}</span>}
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
