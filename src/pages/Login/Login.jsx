import "./Login.scss";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { LoginBackgroundImage } from "../../components/LoginBackgroundImage/LoginBackgroundImage";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="form-container">
          <h1>Welcome back!</h1>
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
            <div className="forgot-pw-box">
              <div className="remember-me">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <span>Forgot Password?</span>
            </div>
            <button className="button" onClick={() => navigate("/")}>
              log in
            </button>
          </form>
          <button className="google-login-btn button">
            <GoogleIcon className="google-icon" />
            Log In with Google
          </button>
          <div className="to-signup">
            <span>
              Already have an account?{" "}
              <Link to={"/signup"} className="underline-none">
                <span className="link">Sign Up</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <LoginBackgroundImage />
    </div>
  );
};
