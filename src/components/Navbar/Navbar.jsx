import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrFormClose } from "react-icons/gr";
import OffcanvasBgImg from "../../assets/images/become-a-seller-bg.png";
import PlayIcon from "../../assets/images/play-icon.png";
import { PiCaretDownBold } from "react-icons/pi";
import { useStateValue } from "../../StateProvider";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";

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
  const [{ showProfileOptions }, dispatch] = useStateValue();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);
  const navigate = useNavigate();

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
    borderBottom: pathname !== "/" ? "1px solid #c2c2c2" : "",
    backgroundColor: pathname === "/" && "#fffbf6",
    gridTemplateColumns: pathname === "/" ? "1fr 1fr" : undefined,
  };

  return (
    <div className="navbar-main" style={customStyles}>
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
        {pathname !== "/" &&
        pathname !== "/dashboard/dashboard" &&
        pathname !== "/dashboard/message" &&
        pathname !== "/dashboard/settings" &&
        pathname !== "/dashboard/support-ticket" ? (
          <AiOutlineMenu className="menu-icon" />
        ) : null}
        {pathname === "/dashboard/dashboard" ||
        pathname === "/dashboard/message" ||
        pathname === "/dashboard/settings" ||
        pathname === "/dashboard/support-ticket" ? (
          <AiOutlineMenu
            onClick={() => setShowDashboardMenu(!showDashboardMenu)}
            className="menu-icon"
          />
        ) : null}
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
            <Link to={"/shop"} className="underline-none">
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
            {pathname !== "/signup" && pathname !== "/login" ? (
              <li>
                <div
                  className="profile"
                  onClick={() =>
                    dispatch({
                      type: "PROFILE_OPTIONS_VIEW",
                      status: !showProfileOptions,
                    })
                  }
                >
                  <img
                    src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                    alt="profile"
                  />
                  Pranav
                  <PiCaretDownBold className="icon" />
                </div>
              </li>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="btn-secondary button">log in</button>
                </Link>
                <Link to={"/signup"}>
                  <button className="btn-primary button">sign up</button>
                </Link>
              </>
            )}
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
                    <Link
                      to={option.url}
                      className="underline-none"
                      onClick={() => setMenuOpen(false)}
                    >
                      <li>{option.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={showDashboardMenu}
        onHide={() => setShowDashboardMenu(false)}
        placement={"start"}
      >
        <div className="offcanvas-header-dashboard">
          <GrFormClose
            className="icon"
            onClick={() => setShowDashboardMenu(false)}
          />
        </div>
        <Offcanvas.Body className="dashboard-offcanvas-body">
          <div className="offcanvas-inner">
            <div className="options">
              <div
                onClick={() => {
                  navigate(`/dashboard/${"dashboard"}`);
                  setShowDashboardMenu(false);
                }}
                className={`option`}
              >
                <LuLayoutDashboard className="icon" />
                Dashboard
              </div>
              <div
                onClick={() => {
                  navigate(`/dashboard/${"message"}`);
                  setShowDashboardMenu(false);
                }}
                className={`option`}
              >
                <AiOutlineMessage className="icon" />
                Message
              </div>
              <div
                onClick={() => {
                  navigate(`/dashboard/${"settings"}`);
                  setShowDashboardMenu(false);
                }}
                className={`option`}
              >
                <LuSettings className="icon" />
                Settings
              </div>
              <div
                onClick={() => {
                  navigate(`/dashboard/${"support-ticket"}`);
                  setShowDashboardMenu(false);
                }}
                className={`option`}
              >
                Support Ticket
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
