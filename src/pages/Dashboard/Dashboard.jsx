import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import "./Dashboard.scss";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate, useParams } from "react-router";
import { Chat } from "./components/Chat/Chat";
import { Link } from "react-router-dom";
import { PiCaretRight } from "react-icons/pi";

export const Dashboard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [page, setPage] = useState("support-ticket");
  const [chatMessages, setChatMessages] = useState(true);
  // const [page, setPage] = useState(params.page.toString() || "dashboard");

  useEffect(() => {
    setPage(params.page);
  }, [params.page]);
  return (
    <div className="dashboard-container">
      <div className="options">
        <div
          onClick={() => {
            navigate(`/dashboard/${"dashboard"}`);
          }}
          on
          className={`option ${page === "dashboard" && "active"}`}
        >
          <LuLayoutDashboard className="icon" />
          Dashboard
        </div>
        <div
          onClick={() => {
            navigate(`/dashboard/${"message"}`);
          }}
          className={`option ${page === "message" && "active"}`}
        >
          <AiOutlineMessage className="icon" />
          Message
        </div>
        <div
          onClick={() => {
            navigate(`/dashboard/${"settings"}`);
          }}
          className={`option ${page === "settings" && "active"}`}
        >
          <LuSettings className="icon" />
          Settings
        </div>
        <div
          onClick={() => {
            navigate(`/dashboard/${"support-ticket"}`);
          }}
          className={`option ${page === "support-ticket" && "active"}`}
        >
          Support Ticket
        </div>
      </div>
      <div className="right-side">
        {page === "dashboard" && (
          <div className="dashboard">
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
        {page === "settings" && (
          <div className="settings">
            <div className="routes">
              <Link to={`/dashboard/${"dashboard"}`} className="underline-none">
                Dashboard
              </Link>
              <PiCaretRight className="icon" />
              <Link to={`/dashboard/${"settings"}`} className="underline-none">
                Settings
              </Link>
            </div>
            <div className="settings-content">
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
          <div className="support-ticket">
            <div className="routes">
              <Link to={`/dashboard/${"dashboard"}`} className="underline-none">
                Dashboard
              </Link>
              <PiCaretRight className="icon" />
              <Link
                to={`/dashboard/${"support-ticket"}`}
                className="underline-none"
              >
                Support Ticket
              </Link>
            </div>
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
