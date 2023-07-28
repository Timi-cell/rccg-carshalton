import React, { useEffect, useState } from "react";
import "../scss/dash.scss";
import { InfoBlock } from "../components/Blocks";
import MembersList from "../components/MembersList";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_FEMALE,
  CALC_MALE,
  SET_MEMBER_INFO,
  deleteMember,
  getMembers,
} from "../redux/features/member/memberSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  FILTER_MEMBERS,
  SEARCH_MEMBERS,
  selectfilteredMembers,
  selectMessage,
} from "../redux/features/filter/filterSlice";

const Dashboard = () => {
    useRedirectLoggedOutUser("/login");
  const filteredMembers = useSelector(selectfilteredMembers);
  const message = useSelector(selectMessage);
  const [search, setSearch] = useState("");
  const [fValue, setfValue] = useState("");
  const dispatch = useDispatch();
  let { loadingStatus, members, males, females } = useSelector(
    (state) => state.member
  );
  const csvData = [
    [
      "S/N",
      "Name",
      "Gender",
      "Birth Date",
      "Email",
      "Occupation",
      "Home Address",
      "Marital Status",
      "Phone Number",
    ],
    ...members.map(
      (
        { name, gender, DOB, email, occupation, address, maritalStatus, phone },
        id
      ) => [
        id + 1,
        name,
        gender,
        DOB,
        email,
        occupation,
        address,
        maritalStatus,
        phone,
      ]
    ),
  ];

  const refreshPage = () => {
    dispatch(getMembers());
    dispatch(CALC_MALE(members));
    dispatch(CALC_FEMALE(members));
  };
  const handleDelete = (id) => {
    dispatch(deleteMember(id));
    refreshPage();
  };
  const confirmDelete = (id) => {
    confirmAlert({
      title: "DELETE MEMBER",
      message: `Are you sure you want to delete this member's information?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(SEARCH_MEMBERS({ search, members }));
  }, [dispatch, search, members]);

  useEffect(() => {
    dispatch(FILTER_MEMBERS({ fValue, members }));
  }, [dispatch, fValue, members]);

  useEffect(() => {
    if (loadingStatus === "idle") {
      dispatch(getMembers());
    }
    dispatch(CALC_MALE(members));
    dispatch(CALC_FEMALE(members));
    dispatch(SET_MEMBER_INFO({}));
  }, [dispatch, loadingStatus, members]);

  return (
    <section className="p-4 md:p-8 bg-light dash">
      <h1 className="text-2xl sm:text-3xl md:text-4xl">Admin Dashboard</h1>
      <div className="flex flex-col md:flex-row justify-start items-center gap-1 mt-4">
        <InfoBlock
          title={"Total Members"}
          number={males + females}
          color={"bg-green-800"}
        />
        <InfoBlock title={"Males"} number={males} color={"bg-blue-800"} />
        <InfoBlock title={"Females"} number={females} color={"bg-red-800"} />
      </div>
      <div className="flex flex-row justify-between items-center gap-4 mt-4 sf ">
        <input
          type="text"
          className="rounded-md border-0 placeholder:text-black lg:w-2/5 w-full animate__animated animate__fadeInLeft"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search member..."
          value={search}
        />
        <select
          className="rounded-md lg:w-2/5 w-full animate__animated animate__fadeInRight"
          value={fValue}
          onChange={(e) => setfValue(e.target.value)}
        >
          <option value="">All Members</option>
          <option value="Male">All Males</option>
          <option value="Female">All Females</option>
          <option value="Birthdays">See Birthdays This Month</option>
        </select>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 mt-4">
        <Link to="/add-member">
          <button className="px-6 py-3 text-base animate__animated animate__fadeInLeft bg-blue-600 text-white rounded-md transition-all delay-100 ease-in hover:bg-blue-800  hover:border-blue-800">
            Add New Member
          </button>
        </Link>
        <CSVLink filename="rccgcarshalton_members.csv" data={csvData}>
          <button className="px-6 py-3 text-base  animate__animated animate__fadeInRight bg-blue-600 text-white rounded-md transition-all delay-100 ease-in hover:bg-blue-800  hover:border-blue-800">
            Export To CSV
          </button>
        </CSVLink>
      </div>
      <MembersList
        loadingStatus={loadingStatus}
        members={filteredMembers}
        deleteMember={confirmDelete}
        message={message}
      />
    </section>
  );
};

export default Dashboard;
