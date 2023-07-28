import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addMember, getMembers } from "../redux/features/member/memberSlice";
import Loader from "../components/Loader";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";

const AddMemberForm = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    name: "",
    gender: "",
    DOB: "",
    email: "",
    occupation: "",
    address: "",
    maritalStatus: "",
    phone: "",
  };
  let { isLoading } = useSelector((state) => state.member);
  const [memberData, setMemberData] = useState(initialState);
  const {
    name,
    gender,
    DOB,
    email,
    occupation,
    address,
    maritalStatus,
    phone,
  } = memberData;
  const refreshPage = () => {
    dispatch(getMembers());
  };
  const handleChange = (e) => {
    setMemberData({
      ...memberData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !gender ||
      !DOB ||
      !email ||
      !occupation ||
      !address ||
      !maritalStatus ||
      !phone
    ) {
      toast.error("Please fill in all fields.", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }
    dispatch(addMember(memberData));
    navigate("/dashboard");
  };

  return (
    <section className="px-4 md:px-8 py-8 bg-light">
      {isLoading && <Loader />}
      <Link to="/dashboard">
        <p onClick={refreshPage} className="text-blue-500 text-base md:text-lg">
          &larr; Go to Dashboard
        </p>
      </Link>
      <h1 className="text-lg sm:text-xl md:text-2xl mt-5">Add New Member</h1>
      <form
        className="w-full md:w-1/2 mt-5 animate__animated animate__fadeInRight"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
            onChange={handleChange}
            required
            name="name"
            value={name}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail Address"
            className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
            onChange={handleChange}
            required
            value={email}
            name="email"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={handleChange}
            id="phone"
            placeholder="Phone Number"
            className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
            required
            name="phone"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            value={gender}
            required
            className="w-full block mt-4 rounded-lg"
          >
            <option value="">Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            value={occupation}
            id="occupation"
            placeholder="Occupation"
            className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
            onChange={handleChange}
            required
            name="occupation"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="DOB">Birth Date</label>
          <input
            type="date"
            onChange={handleChange}
            value={DOB}
            id="DOB"
            placeholder="Birth Date"
            className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
            required
            name="DOB"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select
            onChange={handleChange}
            name="maritalStatus"
            id="maritalStatus"
            value={maritalStatus}
            required
            className="w-full block mt-4 rounded-lg"
          >
            <option value="">Choose Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="address">Home Address</label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="Home Address"
            className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
            required
            name="address"
            onChange={handleChange}
          />
        </div>
        <button className="px-6 py-3 mt-4 lg:text-lg text-sm sm:text-base bg-blue-600 text-white rounded-md transition-all delay-100 ease-in hover:bg-blue-800  hover:border-blue-800">
          Add Member
        </button>
      </form>
    </section>
  );
};

export default AddMemberForm;
