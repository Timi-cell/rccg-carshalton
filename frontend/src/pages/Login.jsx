import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiLogIn } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { loginAdmin, validateEmail } from "../services/authService";
import Loader from "../components/Loader";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    const adminData = {
      email,
      password,
    };
    setIsLoading(true);
     try {
       const data = await loginAdmin(adminData);
       if (data) {
         dispatch(SET_LOGIN(true));
         navigate("/dashboard");
       }
       setIsLoading(false);
     } catch (error) {
       setIsLoading(false);
       toast.error("Invalid email or password!", {
         position: toast.POSITION.TOP_LEFT,
       });
     }
  };
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <section className="relative bg-light py-64">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 md:w-1/2 w-full bg-white p-8 rounded-md">
          <div className="flex flex-row justify-center items-center">
            <BiLogIn color="rgb(0, 0, 158)" size={45} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="email">Admin Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                onChange={handleChange}
                required
                name="email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="pass">Admin Password</label>
              <input
                type="password"
                onChange={handleChange}
                id="pass"
                placeholder="Password"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                required
                name="password"
              />
            </div>
            <button className="px-6 py-3 mt-4 lg:text-lg text-base bg-blue-600 text-white rounded-md transition-all delay-100 ease-in hover:bg-blue-800  hover:border-blue-800">
              Login
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
