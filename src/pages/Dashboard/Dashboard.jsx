import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import "./Dashboard.scss";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate, useParams } from "react-router";

export const Dashboard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [page, setPage] = useState(params.page.toString() || "dashboard");

  useEffect(() => {
    setPage(params.page);
  }, [params.page]);
  return (
    <div className="dashboard-container">
      <div className="options">
        <div
          onClick={() => {
            navigate(`/dashboard/${"dashboard"}`);
            setPage("dashboard");
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
            setPage("message");
          }}
          className={`option ${page === "message" && "active"}`}
        >
          <AiOutlineMessage className="icon" />
          Message
        </div>
        <div
          onClick={() => {navigate(`/dashboard/${'settings'}`);setPage("settings")}}
          className={`option ${page === "settings" && "active"}`}
        >
          <LuSettings className="icon" />
          Settings
        </div>
        <div
          onClick={() => {navigate(`/dashboard/${'support-ticket'}`);setPage("ticket")}}
          className={`option ${page === "support-ticket" && "active"}`}
        >
          Support Ticket
        </div>
      </div>
      <div className="right-side">
        <div className="dashboard">
          <h1>Welcome!</h1>
          <div className="dashboard-content">
            <h3>Progress</h3>
            <div className="dashboard-content-box">
              <p>
                Abstract Ocean Oil Painting On Canvas Original Beach Sea
                Landscape Painting Palette Knife Painting Large Wall Art Sea Sky
                Living room Decor
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
      </div>
    </div>
  );
};
