import React from "react";
import Logo from "../assets/rccg.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { logOutAdmin } from "../services/authService";
import { SET_LOGIN } from "../redux/features/auth/authSlice";

const DashHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await logOutAdmin();
      dispatch(SET_LOGIN(false));
      navigate("/login");
    } catch (error) {
      toast.error("Logout Unsuccessful!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  const confirmLogOut = () => {
    confirmAlert({
      title: "LOGOUT",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logOut(),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <header className="flex flex-row justify-between items-center gap-8 bg-white py-4 px-4 md:px-8">
      <div className="flex flex-row justify-start items-center gap-4">
        <Link to="/">
          <div className="w-16">
            <img src={Logo} alt="RCCG Logo" />
          </div>
        </Link>
        <p className="text-base">RCCG Carshalton</p>
      </div>
      <button
        onClick={confirmLogOut}
        className="lg:text-lg text-base sm:px-4 px-3 py-2.5 text-green-600 border-2 border-green-600 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-green-600 focus:bg-green-700 focus:text-white"
      >
        Logout
      </button>
    </header>
  );
};

export default DashHeader;
