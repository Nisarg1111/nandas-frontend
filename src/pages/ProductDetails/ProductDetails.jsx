import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.scss";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import artImage from "../../assets/arts/art (3).png";
import artImage1 from "../../assets/arts/art (7).png";
import artImage2 from "../../assets/arts/art (4).png";
import { TfiTruck } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { PopularArtworks } from "../../components/PopularArtworks/PopularArtworks";
import { Accordion } from "../Home/components/Accordion/Accordion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, fetchProductInfo } from "../../apiCall";
import { toast } from "react-hot-toast";
import { domainName } from "../../Constants";
import { useStateValue } from "../../StateProvider";

export const ProductDetails = () => {
  const [{ favorites }] = useStateValue();
  const { productId } = useParams();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(favorites.some((item) => item.id === parseInt(productId)));
  }, [favorites, productId]);

  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(null);

  // fetch product info
  const { data, isLoading } = useQuery(
    ["product-info", productId],
    fetchProductInfo,
    {
      onSuccess: (data) => {
        setProduct(data.data?.value);
        console.log(data.data?.value);
      },
      onError: (err) => {
        console.log(err, "ERROR");
        if (err.message) {
          toast.error(err.message);
        } else {
          toast.error("Something went wrong");
        }
      },
    }
  );

  const changeCurrentSlide = (type) => {
    if (type === "+") {
      if (currentSlide === product?.sub_images?.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    } else {
      if (currentSlide === 0 || !currentSlide) {
        setCurrentSlide(product.sub_images?.length - 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  // cart mutation function
  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      if (data.data?.status[0]?.Error === "False") {
        toast.success(data.data?.status[0]?.ResponseMessage);
        // queryClient.invalidateQueries("cart");
      }
    },
    onError: (err) => {
      console.log(err, "error");
    },
  });

  // add item to cart
  const addProductToCart = (pdtId) => {
    addToCartMutation.mutate({ productId: pdtId, quantity: 1 });
  };

  return (
    <div className="main">
      <div className="routes">
        <Link to={"/"} className="underline-none">
          Home
        </Link>
        <PiCaretRight className="icon" />
        <Link to={"/shop"} className="underline-none">
          Shop
        </Link>
        <PiCaretRight className="icon" />
        <Link className="underline-none">{product?.title}</Link>
      </div>
      <div className="product-container">
        <div className="images-container" data-aos="fade-right">
          <div className="image-main">
            <div className="icon-bg">
              <PiCaretLeft className="icon" onClick={changeCurrentSlide} />
            </div>
            <div className="icon-bg">
              <PiCaretRight
                className="icon"
                onClick={() => changeCurrentSlide("+")}
              />
            </div>
            <img
              src={
                !currentSlide
                  ? `${domainName}${product.main_image}`
                  : `${domainName}${product?.sub_images[currentSlide]}`
              }
              alt={product.main_image}
            />
          </div>
          <div className="thumbnails">
            {product?.sub_images &&
              product.sub_images.map((item, index) => (
                <img
                  onClick={() => setCurrentSlide(index)}
                  src={`${domainName}${item}`}
                  alt="thumbnail"
                  className={`${currentSlide === index && "active"}`}
                />
              ))}
          </div>
          <div className="options">
            <div>
              {liked ? (
                <>
                  <FaHeart
                    color="red"
                    className="heart-icon icon heart-filled-icon icon-heart"
                    onClick={() => setLiked(false)}
                  />
                  <span>Added to Favorites</span>
                </>
              ) : (
                <>
                  <AiOutlineHeart
                    className="heart-icon icon outline-heart-icon icon-heart"
                    onClick={() => setLiked(true)}
                  />
                  <span>Add to Favorites</span>
                </>
              )}
            </div>
            {/* <div>
              <AiOutlineEye className="icon" />
              <span>See in Your Room</span>
            </div> */}
            <div>
              <AiOutlineShareAlt className="icon" />
              <span>Share</span>
            </div>
          </div>
        </div>
        <div className="product-details" data-aos="fade-left">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <h2>₹{product?.price}</h2>
          {product?.emi && <p>EMI starts at ₹{product?.emi}/month.</p>}
          <div className="buttons">
            {/* {!alreadyInCart ? ( */}
            <button
              className="btn-secondary"
              // onClick={() => navigate("/checkout")}
              onClick={() => addProductToCart(product.id)}
            >
              add to bag
            </button>
            {/* // ) : (
            //   <button
            //     className="btn-secondary"
            //     onClick={() => navigate("/checkout")}
            //   >
            //     go to cart
            //   </button>
            // )} */}
            <button
              className="btn-primary"
              onClick={() => navigate("/checkout")}
            >
              buy now
            </button>
          </div>
          {product.rent && (
            <button
              onClick={() => navigate("/rental")}
              className="btn-secondary"
            >
              Rent from ₹{product.rent}/Month
            </button>
          )}
          <div className="delivery-input">
            <label htmlFor="">Check Delivery Dates</label>
            <div className="input-box">
              <input type="tel" name="pincode" placeholder="Enter Pincode" />
              <span>Apply</span>
            </div>
            <div className="truck">
              <TfiTruck className="icon" />
              <span>Delivered to Ahmedabad : April 6th</span>
            </div>
          </div>
          <span>Categories : Art</span>
          {product.description && (
            <>
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ad
                molestias totam, deleniti quisquam corporis nobis incidunt
                nostrum, provident nam, repudiandae reiciendis beatae et autem
                id cupiditate quidem quae? Consequuntur?
              </p>
            </>
          )}
          <h4>Additional Information</h4>
          {product.weight && <span>Weight : {product.weight}kg</span>}
          <span>Dimensions : 40 X 50 X 70 cm</span>
          <Accordion content={"Shipping and Taxes"} />
        </div>
      </div>
      <PopularArtworks />
    </div>
  );
};
