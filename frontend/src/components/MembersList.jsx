import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../components/Loader";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }

  return text;
};
const MembersList = ({ loadingStatus, members, deleteMember, message }) => {
  // Begin Pagination
  const [currentMembers, setCurrentMembers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [memberOffset, setMemberOffset] = useState(0);
  const membersPerPage = 5;

  useEffect(() => {
    const endOffset = memberOffset + membersPerPage;
    setCurrentMembers(members.slice(memberOffset, endOffset));
    setPageCount(Math.ceil(members.length / membersPerPage));
  }, [memberOffset, members, membersPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * membersPerPage) % members.length;
    setMemberOffset(newOffset);
  };

  // End Pagination
  return (
    <div className="mt-4 mb-8 animate__animated animate__zoomIn">
      {loadingStatus === "loading" && <SpinnerImg />}
      <div>
        {loadingStatus === "succeeded" && members.length === 0 ? (
          message ? (
            <h3 className="text-base md:text-lg">
              Member not found. Please try a different search.
            </h3>
          ) : (
            <h3 className="text-base md:text-lg">No members yet.</h3>
          )
        ) : (
          <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-center text-black">
              <thead className="text-base text-gray-700 bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-5 leading-6">
                    S/N
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Gender
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Birth Date
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Occupation
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Home Address
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Marital Status
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Phone Number
                  </th>
                  <th scope="col" className="px-4 py-5 leading-6">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.map((member, id) => (
                  <tr
                    className={`${
                      (id + 1) % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } border-b text-base`}
                    key={id}
                  >
                    <td className="px-6 py-4">{id + 1}</td>
                    <td className="px-6 py-4">
                      {shortenText(member.name, 15)}
                    </td>
                    <td className="px-6 py-4">{member.gender}</td>
                    <td className="px-6 py-4">{member.DOB}</td>
                    <td className="px-6 py-4">
                      {shortenText(member.email, 10)}
                    </td>
                    <td className="px-6 py-4">
                      {shortenText(member.occupation, 15)}
                    </td>
                    <td className="px-6 py-4">
                      {shortenText(member.address, 10)}
                    </td>
                    <td className="px-6 py-4">{member.maritalStatus}</td>
                    <td className="px-6 py-4">{member.phone}</td>
                    <td className="px-6 py-4">
                      <p className="flex flex-col md:flex-row gap-8 justify-start items-start">
                        <Link to={`/edit-member/${member._id}`}>
                          <span className="text-blue-600 cursor-pointer">
                            Edit
                          </span>
                        </Link>{" "}
                        <span
                          className="text-red-600 cursor-pointer"
                          onClick={() => deleteMember(member._id)}
                        >
                          Delete
                        </span>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ReactPaginate
        breakLabel=""
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="flex flex-row items-center justify-center gap-4 mt-8 text-base list-none"
        pageLinkClassName="py-2 px-4 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md mt-1 outline-0 border border-solid border-slate-500"
        previousLinkClassName="p-2 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md mt-1 outline-0 border border-solid border-slate-500"
        nextLinkClassName="p-2 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md mt-1 outline-0 border border-solid border-slate-500"
        activeLinkClassName="bg-blue-600 text-white"
      />
    </div>
  );
};

export default MembersList;

// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Gender</th>
//       <th>Birth Date</th>
//       <th>Email</th>
//       <th>Occupation</th>
//       <th>Address</th>
//       <th>Marital Status</th>
//       <th>Phone Number</th>
//       <th>Options</th>
//     </tr>
//   </thead>
//   <tbody>
//     {currentMembers.map((member, id) => (
//       <tr key={id}>
//         <td>{member.name}</td>
//         <td>{member.gender}</td>
//         <td>{member.DOB}</td>
//         <td>{member.email}</td>
//         <td>{member.occupation}</td>
//         <td>{member.address}</td>
//         <td>{member.maritalStatus}</td>
//         <td>{member.phone}</td>
//         <td>
//           <div>
//             <FaEdit size={30} /> <span>Edit</span>
//           </div>
//           <div>
//             <AiFillDelete size={30} color="var(--red)" />{" "}
//             <span>Delete</span>
//           </div>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
