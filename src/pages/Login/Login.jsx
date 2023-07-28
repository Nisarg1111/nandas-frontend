import "./Login.scss";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { LoginBackgroundImage } from "../../components/LoginBackgroundImage/LoginBackgroundImage";
import { useForm } from "react-hook-form";
import { login } from "../../apiCall";
import { useStateValue } from "../../StateProvider";
import { toast } from "react-hot-toast";

export const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const [, dispatch] = useStateValue();

  const handleFormSubmit = async (values) => {
    try {
      const response = await login(values);
      console.log(response, "login response");
      if (response.data?.access_token) {
        dispatch({ type: "SET_LOGIN_STATUS", status: true });
        sessionStorage.setItem("token", response.data.access_token);
        sessionStorage.setItem("refresh_token", response.data.refresh_token);
        sessionStorage.setItem(
          "user_details",
          JSON.stringify(response.data.value)
        );
        navigate("/");
      } else {
        toast.error(response.data?.status[0]?.Message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="login-container">
      <div className="login-section" data-aos="fade-right">
        <div className="form-container">
          <h1>Welcome back!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              <small className="error">{errors.email?.message}</small>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,16}$/i,
                    message:
                      "Password should be atleast 6 and maximum 16 characters and must contain uppercase, lowercase, numbers and special characters",
                  },
                })}
              />
              <small className="error">{errors.password?.message}</small>
            </div>
            <div className="forgot-pw-box">
              <div className="remember-me">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <span>Forgot Password?</span>
            </div>
            <button className="button" type="submit">
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
