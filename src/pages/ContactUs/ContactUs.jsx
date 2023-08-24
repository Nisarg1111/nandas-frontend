import "./ContactUs.scss";
import Img from "../../assets/images/contact-us-img.png";
import { useForm } from "react-hook-form";

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  // handle form submit
  const onSubmit = (values)=>{
    console.log(values)
    reset()
  }
  return (
    <div className="main-div">
      <div className="left-side" data-aos="fade-right">
        <h1>Contact Us</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "This field is required",
                pattern: {
                  value: /^[^-\s][a-zA-Z0-9_\s-]+$/,
                  message: "Invalid first name",
                },
              })}
            />
            <small className="error">{errors.name?.message}</small>
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <small className="error">{errors.email?.message}</small>
          </div>
          <div className="input-box">
            <label htmlFor="">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              {...register("phoneNumber", {
                required: "This field is required",
                pattern: {
                  value: /^[6-9]\d{9}$/i,
                  message: "Invalid phone number",
                },
              })}
            />
            <small className="error">{errors.phoneNumber?.message}</small>
          </div>
          <div className="input-box">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Leave us a message"
              {...register("message", {
                required: "This field is required",
                minLength: {
                  value: 10,
                  message: "This field must have at least 10 characters",
                },
              })}
            />
            <small className="error">{errors.message?.message}</small>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
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
