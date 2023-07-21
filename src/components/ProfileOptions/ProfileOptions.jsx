import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { BsHandbag, BsSuitHeart } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const ProfileOptions = () => {
  return (
    <div className="profile-options-bg">
      <div className="profile-options">
        <Link className="underline-none" to={`/dashboard/${"dashboard"}`}>
          <div className="option">
            <LuLayoutDashboard className="icon" />
            Dashboard
          </div>
        </Link>
        <Link className="underline-none" to={`/settings/${"my-orders"}`}>
          <div className="option">
            <BsHandbag className="icon" />
            My Orders
          </div>
        </Link>
        <Link className="underline-none" to={`/settings/${"favorites"}`}>
          <div className="option">
            <BsSuitHeart className="icon" />
            Favorites
          </div>
        </Link>
        <Link className="underline-none" to={`/settings/${"edit-profile"}`}>
          <div className="option">
            <FaRegEdit className="icon" />
            Edit Profile
          </div>
        </Link>
        <Link className="underline-none" to={`/settings/${"edit-profile"}`}>
          <div className="option">
            <LuSettings className="icon" />
            Settings
          </div>
        </Link>
        <div className="option">
          <RiLogoutBoxLine className="icon" />
          Log Out
        </div>
      </div>
    </div>
  );
};
