import "./AboutUs.scss";
import BannerImg from "../../assets/images/become-a-seller-bg.png";
import ArtImg from "../../assets/images/about-us-banner.png";
import Person1 from "../../assets/images/Rectangle 4.png";
import Person2 from "../../assets/images/Rectangle 4-1.png";
import Person3 from "../../assets/images/Rectangle 4-2.png";
import Person4 from "../../assets/images/Rectangle 4-3.png";
import Person5 from "../../assets/images/Rectangle 4-4.png";

export const AboutUs = () => {
  const artists = [Person1, Person2, Person3, Person4, Person5];
  return (
    <div className="about-us-main">
      <div className="header" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="content">
          <div className="left" data-aos="fade-right">
            <h1>Nanda Art</h1>
            <h2>
              We can <b>produce stunning art</b> for you.
            </h2>
          </div>
          <div data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              luctus neque quis nisi pharetra, eu vestibulum felis lacinia. Cras
              sollicitudin faucibus est nec porttitor.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Etiam luctus neque quis nisi
              pharetra, eu vestibulum felis lacinia. Cras sollicitudin faucibus
              est nec porttitor.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam luctus neque quis nisi pharetra, eu
              vestibulum felis lacinia. Cras sollicitudin faucibus est nec
              porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam luctus neque quis nisi pharetra, eu vestibulum felis
              lacinia. Cras sollicitudin faucibus est nec porttitor.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam luctus neque
              quis nisi pharetra, eu vestibulum felis lacinia.
            </p>
          </div>
        </div>
      </div>
      <div className="our-story" data-aos="fade-up">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus
          neque quis nisi pharetra, eu vestibulum felis lacinia. Cras
          sollicitudin faucibus est nec porttitor.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam luctus neque quis nisi pharetra, eu
          vestibulum felis lacinia. Cras sollicitudin faucibus est nec
          porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam luctus neque quis nisi pharetra, eu vestibulum felis lacinia.
          Cras sollicitudin faucibus est nec porttitor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus
          neque quis nisi pharetra, eu vestibulum felis lacinia. Cras
          sollicitudin faucibus est nec porttitor.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam luctus neque quis nisi pharetra, eu
          vestibulum felis lacinia. Cras sollicitudin faucibus est nec
          porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam luctus neque quis nisi pharetra, eu vestibulum felis lacinia.
          Cras sollicitudin faucibus est nec porttitor.
        </p>
      </div>
      <img src={ArtImg} alt="banner" className="banner-art" data-aos="fade-up"/>
      <div className="team">
        <h1 data-aos="fade-right">Meet The Team</h1>
        <p data-aos="fade-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus
          neque quis nisi pharetra, eu vestibulum felis lacinia. Cras
          sollicitudin faucibus est nec porttitor.
        </p>
        <div className="team-members" data-aos="fade-left">
          {artists.map((artist) => (
            <div className="artist">
              <img src={artist} alt="artist" />
              <span>Gregg Rosen</span>
              <span>Artist</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
