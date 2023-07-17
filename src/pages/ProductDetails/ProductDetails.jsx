import { Link } from "react-router-dom";
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
import { useState } from "react";
import { PopularArtworks } from "../../components/PopularArtworks/PopularArtworks";
import { Accordion } from "../Home/components/Accordion/Accordion";

export const ProductDetails = () => {
  const [liked, setLiked] = useState(false);
  const imagesArr = [
    artImage,
    artImage2,
    artImage1,
    artImage,
    artImage2,
    artImage1,
    artImage,
    artImage2,
    artImage1,
    artImage,
    artImage2,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeCurrentSlide = (type) => {
    if (type === "+") {
      if (currentSlide === imagesArr.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    } else {
      if (currentSlide === 0) {
        setCurrentSlide(imagesArr.length - 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
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
        <Link className="underline-none">Structural Landscape</Link>
      </div>
      <div className="product-container">
        <div className="images-container">
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
            <img src={imagesArr[currentSlide]} alt="" />
          </div>
          <div className="thumbnails">
            {imagesArr.map((item, index) => (
              <img
                onClick={() => setCurrentSlide(index)}
                src={item}
                alt="thumbnail-image"
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
            <div>
              <AiOutlineEye className="icon" />
              <span>See in Your Room</span>
            </div>
            <div>
              <AiOutlineShareAlt className="icon" />
              <span>Share</span>
            </div>
          </div>
        </div>
        <div className="product-details">
          <h1>Structural Landscape</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ad fuga tempore nihil sed quibusdam voluptas nostrum. Debitis labore
            aut, consequuntur fugit sit ut adipisci reiciendis, repellat, fuga
            repellendus dolor.
          </p>
          <h2>₹1,85,323</h2>
          <p>EMI starts at ₹6045/month.</p>
          <div className="buttons">
            <button className="btn-secondary">add to bag</button>
            <button className="btn-primary">buy now</button>
          </div>
          <button className="btn-secondary">Rent from ₹6045/Month</button>
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
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ad
            molestias totam, deleniti quisquam corporis nobis incidunt nostrum,
            provident nam, repudiandae reiciendis beatae et autem id cupiditate
            quidem quae? Consequuntur?
          </p>
          <h4>Additional Information</h4>
          <span>Weight : 10kg</span>
          <span>Dimensions : 40 X 50 X 70 cm</span>
          <Accordion content={"Shipping and Taxes"} />
        </div>
      </div>
      <PopularArtworks />
    </div>
  );
};
