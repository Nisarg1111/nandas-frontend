import "./Signup.scss";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { LoginBackgroundImage } from "../../components/LoginBackgroundImage/LoginBackgroundImage";

export const Signup = () => {
  const navigate = useNavigate();
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
            <button className="button" onClick={() => navigate("/login")}>
              sign up
            </button>
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
