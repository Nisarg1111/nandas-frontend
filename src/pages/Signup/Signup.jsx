import "./Signup.scss";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-icon.svg";
import { Link } from "react-router-dom";
import ImageBg from "../../assets/images/login-bg.png";
import { RiStarSFill } from "react-icons/ri";
import { LoginBackgroundImage } from "../../components/LoginBackgroundImage/LoginBackgroundImage";

export const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <div className="form-container">
          <h1>Welcome!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          <form>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="*********" />
            </div>
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button className="button">sign up</button>
          </form>
          <button className="google-signup-btn button">
            <GoogleIcon className="google-icon" />
            Sign Up with Google
          </button>
          <div className="to-login">
            <span>
              Already have an account?{" "}
              <Link to={"/login"} className="underline-none">
                <span className="link">Log In</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <LoginBackgroundImage />
    </div>
  );
};
