import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { BsHandbag, BsSuitHeart } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

export const ProfileOptions = () => {
  return (
    <div className="profile-options-bg">
      <div className="profile-options">
        <div className="option">
          <LuLayoutDashboard className="icon" />
          Dashboard
        </div>
        <div className="option">
          <BsHandbag className="icon" />
          My Orders
        </div>
        <div className="option">
          <BsSuitHeart className="icon" />
          Favorites
        </div>
        <div className="option">
          <FaRegEdit className="icon" />
          Edit Profile
        </div>
        <div className="option">
          <LuSettings className="icon" />
          Settings
        </div>
        <div className="option">
          <RiLogoutBoxLine className="icon" />
          Log Out
        </div>
      </div>
    </div>
  );
};
