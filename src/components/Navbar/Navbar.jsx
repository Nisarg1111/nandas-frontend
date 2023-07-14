import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrFormClose } from "react-icons/gr";
import OffcanvasBgImg from "../../assets/images/become-a-seller-bg.png";
import PlayIcon from "../../assets/images/play-icon.png";

const menuOptions = [
  { title: "shop", url: "/shop" },
  { title: "about us", url: "/" },
  { title: "contact us", url: "/" },
  { title: "become a seller", url: "/" },
  { title: "become a freelancer", url: "/" },
  { title: "build custom art", url: "/" },
];

export const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link to={'/shop'} className="underline-none">
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
        <div
          className="home-page-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="top line"></div>
          <div className="mid line"></div>
          <div className="bottom line"></div>
        </div>
      )}

      <Offcanvas
        show={menuOpen}
        onHide={() => setMenuOpen(false)}
        placement={"top"}
      >
        <div className="offcanvas-header">
          <img src={Logo} alt="logo" className="logo-img" />
          <GrFormClose className="icon" onClick={() => setMenuOpen(false)} />
        </div>
        <Offcanvas.Body className="offcanvas-body">
          <div className="offcanvas-inner">
            <div className="image">
              <img src={OffcanvasBgImg} alt="" className="main-img" />
              <img src={PlayIcon} alt="" className="play-icon" />
            </div>
            <div className="options">
              <ul>
                {menuOptions.map((option) => {
                  return (
                    <Link to={option.url} className="underline-none">
                      <li>{option.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
