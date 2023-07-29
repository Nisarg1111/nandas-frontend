import "./Home.scss";
import BannerText from "../../assets/images/home-banner.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import art2 from "../../assets/arts/art (2).png";
import art3 from "../../assets/arts/art (3).png";
import art4 from "../../assets/arts/art (4).png";
import art5 from "../../assets/arts/art (5).png";
import art7 from "../../assets/arts/art (7).png";
import { Slide } from "react-slideshow-image";
import { ProductCard } from "./components/ProductCard/ProductCard";
import GridImg1 from "../../assets/images/become-a-seller-bg.png";
import GridImg2 from "../../assets/images/become-a-freelancer-bg.png";
import PlayIcon from "../../assets/images/play-icon.png";
import { Accordion } from "./components/Accordion/Accordion";
import { PopularArtworks } from "../../components/PopularArtworks/PopularArtworks";
import { useQuery } from "@tanstack/react-query";
import { fetchRecentProducts } from "../../apiCall";

const artsImages = [art2, art3, art4, art5, art7, art2, art3, art4, art5, art7];

const qaContent = [
  "What can I sell?",
  "How much money can I make?",
  "How much time will I need to invest?",
  "How do I price my service?",
];

export const Home = () => {
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

  // get list of recent products
  const { isLoading: recentProductsLoading, data: recentProducts } = useQuery(
    ["recent-products"],
    fetchRecentProducts
  );

  return (
    <div className="home-container">
      <div className="banner" data-aos="fade-up">
        <img src={BannerText} alt="" />
      </div>
      <div className="slider" data-aos="fade-left">
        {!recentProductsLoading ? (
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
            {recentProducts?.data?.value.map((item) => {
              return <ProductCard item={item} />;
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
      <section className="about">
        <div className="about-the-company" data-aos="fade-up">
          <h2>About the company</h2>
          <h1>We can produce stunning art for you.</h1>
        </div>
        <div className="right-side" data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            luctus neque quis nisi pharetra, eu vestibulum felis lacinia. Cras
            sollicitudin faucibus est nec porttitor.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam luctus neque quis nisi pharetra,
            eu vestibulum felis lacinia. Cras sollicitudin faucibus est nec
            porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam luctus neque quis nisi pharetra, eu vestibulum felis lacinia.
            Cras sollicitudin faucibus est nec porttitor.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam luctus neque quis nisi
            pharetra, eu vestibulum felis lacinia. Cras sollicitudin faucibus
            est nec porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam luctus neque quis nisi pharetra, eu vestibulum felis
            lacinia.
          </p>
          <div className="link-div">
            <span>know more about us</span>
            &rarr;
          </div>
        </div>
      </section>

      <PopularArtworks />

      <section className="grid-2-sections" data-aos="fade-down">
        <div className="grid-box">
          <div className="image">
            <img src={GridImg1} alt="become-a-seller" className="main-img" />
            <img src={PlayIcon} alt="play-icon" className="play-icon" />
          </div>
          <div className="information">
            <h1>Become A Seller</h1>
            <h2>
              Ignite your creative potential and transform into a thriving
              online seller with our expert assistance.
            </h2>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                luctus neque quis nisi pharetra, eu vestibulum felis lacinia.
                Cras sollicitudin faucibus est nec porttitor.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam luctus neque quis
                nisi pharetra, eu vestibulum felis lacinia. Cras sollicitudin
                faucibus est nec porttitor.
              </p>
              <div className="link-div">
                <span>know more about seller</span>
                &rarr;
              </div>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="information">
            <h1>Become A Freelancer</h1>
            <h2>
              Unleash your freelance potential and soar to new heights with our
              invaluable support.
            </h2>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                luctus neque quis nisi pharetra, eu vestibulum felis lacinia.
                Cras sollicitudin faucibus est nec porttitor.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam luctus neque quis
                nisi pharetra, eu vestibulum felis lacinia. Cras sollicitudin
                faucibus est nec porttitor.
              </p>
              <div className="link-div">
                <span>know more about freelancer</span>
                &rarr;
              </div>
            </div>
          </div>
          <div className="image">
            <img src={GridImg2} alt="become-a-seller" className="main-img" />
            <img src={PlayIcon} alt="play-icon" className="play-icon" />
          </div>
        </div>
      </section>

      <section className="questions-section">
        <div className="left-side" data-aos="fade-down">
          <h1>Frequently Asked Questions</h1>
          <h2>
            Check out the FAQ sections if you have a specific query regarding a
            particular form of art.
          </h2>
        </div>
        <div className="questions" data-aos="fade-up">
          {qaContent.map((question) => {
            return <Accordion content={question} />;
          })}
        </div>
      </section>
    </div>
  );
};
