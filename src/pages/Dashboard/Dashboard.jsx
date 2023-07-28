import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import "./Dashboard.scss";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate, useParams } from "react-router";
import { Chat } from "./components/Chat/Chat";
import { Link } from "react-router-dom";
import { PiCaretRight } from "react-icons/pi";
import { FaRegCalendarCheck, FaUserEdit } from "react-icons/fa";
import { LiaHeart } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import artImg1 from "../../assets/arts/art (2).png";
import artImg2 from "../../assets/arts/art (3).png";
import artImg3 from "../../assets/arts/art (4).png";
import artImg4 from "../../assets/arts/art (5).png";
import artImg5 from "../../assets/arts/art (7).png";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { Shipping } from "./components/Shipping/Shipping";

const options = [
  { url: "dashboard", icon: LuLayoutDashboard, title: "Dashboard" },
  { url: "my-orders", icon: FaRegCalendarCheck, title: "My Orders" },
  { url: "favorites", icon: LiaHeart, title: "Favorites" },
  { url: "message", icon: AiOutlineMessage, title: "Message" },
  { url: "settings", icon: LuSettings, title: "Settings" },
  { url: "edit-profile", icon: FaUserEdit, title: "Edit Profile" },
  { url: "shipping", icon: MdOutlineLocalShipping, title: "Shipping" },
  { url: "support-ticket", title: "Support Ticket" },
];

const imagesArr = [
  artImg1,
  artImg2,
  artImg3,
  artImg4,
  artImg5,
  artImg1,
  artImg2,
  artImg3,
  artImg4,
  artImg5,
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [page, setPage] = useState("support-ticket");
  const [chatMessages, setChatMessages] = useState(true);
  // const [page, setPage] = useState(params.page.toString() || "dashboard");

  useEffect(() => {
    setPage(params.page);
  }, [params.page]);

  const pageTitle = options.find((option) => option.url === page);
  return (
    <div className="dashboard-container">
      <div className="options" data-aos="fade-right">
        {options.map((option, i) => (
          <div
            onClick={() => {
              navigate(`/dashboard/${option.url}`);
            }}
            className={`option ${page === option.url && "active"}`}
          >
            {option.icon && <option.icon className="icon" />}
            {option.title}
          </div>
        ))}
      </div>
      <div className="right-side">
        {page !== "message" && (
          <div className="routes" data-aos="fade-up">
            <Link to={`/dashboard/${"dashboard"}`} className="underline-none">
              Dashboard
            </Link>
            <PiCaretRight className="icon" />
            <Link to={`/dashboard/${pageTitle.url}`} className="underline-none">
              {pageTitle.title}
            </Link>
          </div>
        )}
        {page === "dashboard" && (
          <div className="dashboard" data-aos="fade-up">
            <h1>Welcome!</h1>
            <div className="dashboard-content">
              <h3>Progress</h3>
              <div className="dashboard-content-box">
                <p>
                  Abstract Ocean Oil Painting On Canvas Original Beach Sea
                  Landscape Painting Palette Knife Painting Large Wall Art Sea
                  Sky Living room Decor
                </p>
                <div className="dates">
                  <span>Start Date : Tuesday, 06 May 2023</span>
                  <span>End Date : Tuesday, 25 May 2023</span>
                </div>
                <ProgressBar
                  variant="dark"
                  now={30}
                  className="bt-progress-bar"
                />
                <span>last update : Tuesday, 08 May 2023</span>
                <div className="started">
                  <input type="checkbox" name="" id="" />
                  <div>
                    <span>Work Started</span>
                    <div className="images">
                      <div className="image"></div>
                      <div className="image"></div>
                      <div className="image"></div>
                    </div>
                    <span>Tuesday, 06 May 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === "message" && (
          <div className="message-div">
            <Chat />
          </div>
        )}
        {page === "favorites" && (
          <div className="favorites" data-aos="fade-up">
            {imagesArr.map((art, i) => {
              return <ProductItem item={art} key={i} />;
            })}
          </div>
        )}
        {page === "my-orders" && (
          <div className="my-orders" data-aos="fade-up">
            <OrderDetails />
            <OrderDetails />
          </div>
        )}
        {page === "edit-profile" && (
          <div className="edit-profile" data-aos="fade-up">
            <form action="">
              <div className="input-box">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="input-box">
                <label htmlFor="">Password</label>
                <input type="password" />
                <span>Forgot Password ?</span>
              </div>
              <div className="input-box">
                <label htmlFor="">Mobile Number</label>
                <input type="tel" />
              </div>
              <button className="btn-primary">Save</button>
            </form>
          </div>
        )}
        {page === "shipping" && <Shipping />}
        {page === "settings" && (
          <div className="settings">
            <div data-aos="fade-up" className="settings-content">
              <h1>Settings</h1>
              <div>
                Email notifications
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
              <div>
                Chat messages
                <label class="switch">
                  <input
                    onChange={() => setChatMessages(!chatMessages)}
                    type="checkbox"
                    checked={chatMessages}
                  />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}
        {page === "support-ticket" && (
          <div className="support-ticket" data-aos="fade-up">
            <div className="ticket-form">
              <h3>Support Ticket</h3>
              <form className="form">
                <h3>Create New Ticket</h3>
                <span>
                  Fill up all the information here, then click submit button
                </span>
                <div className="input-box">
                  <label htmlFor="">Ticket Number</label>
                  <input type="tel" name="" id="" placeholder="5263469" />
                </div>
                <div className="input-box">
                  <label htmlFor="">Describe The Problem</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Write a problem"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
