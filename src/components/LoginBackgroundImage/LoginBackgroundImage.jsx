import ImageBg from "../../assets/images/login-bg.png";
import { RiStarSFill } from "react-icons/ri";
import "./LoginBackgroundImage.scss";

export const LoginBackgroundImage = () => {
  return (
    <div className="image" style={{ backgroundImage: `url(${ImageBg})` }}>
      <div className="review-box">
        <p>
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          asperiores iste est odit hic et accusamus voluptate. Minus labore
          tempora exercitationem nemo corrupti placeat, autem id, ab veniam
          reiciendis asperiores."
        </p>
        <div className="review">
          <p>Pranav</p>
          <div className="rating">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
        </div>
        <div className="artist">
          <span>Artist</span>
          <span>Nanda Art</span>
        </div>
      </div>
    </div>
  );
};
