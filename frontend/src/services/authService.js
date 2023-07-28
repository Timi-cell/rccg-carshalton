import axios from "axios";
import { toast } from "react-toastify";

// Verify Email
export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

// Login Admin
export const loginAdmin = async (adminData) => {
  try {
    const response = await axios.post(
      `/api/admin/login`,
      adminData
    );
    if (response.statusText === "OK") {
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Logout Admin
export const logOutAdmin = async () => {
  try {
    const response = await axios.get(`/api/admin/logout`);
    if (response.statusText === "OK") {
      toast.success("Logout Successful!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};

// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`/api/admin/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};
