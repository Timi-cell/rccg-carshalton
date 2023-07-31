import axios from "axios";
// import { toast } from "react-toastify";

// Add Member
const addMember = async (memberData) => {
  const response = await axios.post(`/api/members/add`, memberData);
  return response.data;
};

// Get Single Member
const getMember = async (id) => {
  const response = await axios.get(`/api/members/${id}`);
  return response.data;
};
// Get All Members
const getMembers = async () => {
  const response = await axios.get(`/api/members`);
  return response.data;
};

// Delete Members
const deleteMember = async (id) => {
  const response = await axios.delete(`/api/members/${id}`);
  return response.data;
};

// Update Member
const updateMember = async (memberData) => {
  const response = await axios.patch(`/api/members/updatemember`, memberData);
  return response.data;
};

// Get Member Message
// export const getMemberMessage = async (data) => {
//   try {
//     const response = await axios.post(
//       `/api/members/getmembermessage`,
//       data
//     );
//     toast.success(response.data.message, {
//       position: toast.POSITION.TOP_LEFT,
//     });
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message, {
//       position: toast.POSITION.TOP_LEFT,
//     });
//   }
// };
const memberService = {
  addMember,
  getMembers,
  getMember,
  deleteMember,
  updateMember,
  // getMemberMessage,
};

export default memberService;
