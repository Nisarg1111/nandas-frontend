import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 981);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customStyles = {
    borderBottom: "1px solid #c2c2c2",
    backgroundColor: pathname === "/" && "#fff",
    gridTemplateColumns: isSmallScreen ? "1fr" : "",
  };

  return (
    <div
      className="navbar-main"
      style={
        pathname !== "/"
          ? customStyles
          : isSmallScreen && pathname === "/"
          ? { borderBottom: "1px solid #c2c2c2" }
          : pathname === "/"
          ? { backgroundColor: "#fffbf6" }
          : undefined
      }
    >
      {pathname !== "/" && (
        <div className="buttons sm-view-btns">
          <Link to={"/login"}>
            <button className="btn-secondary button">log in</button>
          </Link>
          <Link to={"/signup"}>
            <button className="btn-primary button">sign up</button>
          </Link>
        </div>
      )}
      <div className="logo-and-search">
        {pathname !== "/" && <AiOutlineMenu className="menu-icon" />}
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="logo-img" />
        </Link>
        {pathname !== "/" && (
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <HiOutlineSearch className="icon" />
          </div>
        )}
      </div>
      {pathname !== "/" ? (
        <div className="options">
          <ul>
            <Link className="underline-none">
              <li>shop</li>
            </Link>
            <Link className="underline-none">
              <li>become a seller</li>
            </Link>
            <Link className="underline-none">
              <li>build custom art</li>
            </Link>
            <Link className="underline-none">
              <li>about us</li>
            </Link>
            <Link className="underline-none">
              <li>contact us</li>
            </Link>
            <Link to={"/login"}>
              <button className="btn-secondary button">log in</button>
            </Link>
            <Link to={"/signup"}>
              <button className="btn-primary button">sign up</button>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="home-page-menu-icon">
          <div className="top line"></div>
          <div className="mid line"></div>
          <div className="bottom line"></div>
        </div>
      )}
    </div>
  );
};
