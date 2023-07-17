import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-slideshow-image";
import { ProductItem } from "../ProductItem/ProductItem";
import art2 from "../../assets/arts/art (2).png";
import art3 from "../../assets/arts/art (3).png";
import art4 from "../../assets/arts/art (4).png";
import art5 from "../../assets/arts/art (5).png";
import art7 from "../../assets/arts/art (7).png";
import "./PopularArtworks.scss";

export const PopularArtworks = () => {
  const artsImages = [
    art2,
    art3,
    art4,
    art5,
    art7,
    art2,
    art3,
    art4,
    art5,
    art7,
  ];

  // slider settings
  const responsiveSettings = [
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 250,
      settings: {
        slidesToShow: 2.25,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <section className="popular-artwork">
      <h2>Popular Artwork</h2>
      <div className="slider">
        <Slide
          slidesToScroll={2}
          slidesToShow={5}
          indicators={false}
          transitionDuration={600}
          responsive={responsiveSettings}
          prevArrow={<IoIosArrowBack className="slick-prev" />}
          nextArrow={<IoIosArrowForward className="slick-next" />}
          autoplay={true}
        >
          {artsImages.map((item) => {
            return <ProductItem item={item} />;
          })}
        </Slide>
      </div>
    </section>
  );
};