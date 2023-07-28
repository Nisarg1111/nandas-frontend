import "./ContactUs.scss";
import Img from "../../assets/images/contact-us-img.png";

export const ContactUs = () => {
  return (
    <div className="main-div">
      <div className="left-side" data-aos="fade-right">
        <h1>Contact Us</h1>
        <hr />
        <form action="">
          <div className="input-box">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <label htmlFor="">Mobile Number</label>
            <input type="tel" placeholder="Enter your mobile number" />
          </div>
          <div className="input-box">
            <label htmlFor="">Message</label>
            <textarea name="" id="" rows="5" placeholder="Leave us a message" />
          </div>
          <button className="btn-primary">Submit</button>
        </form>
        <span>NandaArt@example.com</span>
        <span>(603) 555-0123</span>
        <span>8502 Preston Rd. Inglewood, Maine 98380</span>
      </div>
      <div className="right-side" data-aos="fade-left">
        <img src={Img} alt="contact-us" />
      </div>
    </div>
  );
};
