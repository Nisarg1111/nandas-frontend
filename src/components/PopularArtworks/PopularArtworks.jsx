import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-slideshow-image";
import { ProductItem } from "../ProductItem/ProductItem";
import art2 from "../../assets/arts/art (2).png";
import art3 from "../../assets/arts/art (3).png";
import art4 from "../../assets/arts/art (4).png";
import art5 from "../../assets/arts/art (5).png";
import art7 from "../../assets/arts/art (7).png";
import "./PopularArtworks.scss";
import { fetchPopularProducts } from "../../apiCall";
import { useQuery } from "@tanstack/react-query";

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

  // get list of popular products
  const { isLoading: popularProductsLoading, data: popularProducts } = useQuery(
    ["popular-products"],
    fetchPopularProducts
  );
  return (
    <section className="popular-artwork">
      <h2 data-aos="fade-down">Popular Artwork</h2>
      <div className="slider" data-aos="fade-up">
        {!popularProductsLoading ? (
          <Slide
            slidesToScroll={2}
            slidesToShow={5}
            indicators={false}
            transitionDuration={700}
            responsive={responsiveSettings}
            prevArrow={<IoIosArrowBack className="slick-prev" />}
            nextArrow={<IoIosArrowForward className="slick-next" />}
            autoplay={true}
          >
            {popularProducts?.data?.value.map((item) => {
              return <ProductItem item={item} />;
            })}
          </Slide>
        ) : (
          <Slide
            slidesToScroll={2}
            slidesToShow={5}
            indicators={false}
            transitionDuration={700}
            responsive={responsiveSettings}
            prevArrow={<IoIosArrowBack className="slick-prev" />}
            nextArrow={<IoIosArrowForward className="slick-next" />}
            autoplay={true}
          >
            <div class="loading-card"></div>
            <div class="loading-card"></div>
            <div class="loading-card"></div>
            <div class="loading-card"></div>
            <div class="loading-card"></div>
          </Slide>
        )}
      </div>
    </section>
  );
};
