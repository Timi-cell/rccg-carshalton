import axios from "axios";

// const BACKEND_URL = "http://localhost:9000";

// Add Member
const addMember = async (memberData) => {
  const response = await axios.post(
    `/api/members/add`,
    memberData
  );
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
  const response = await axios.patch(
    `/api/members/updatemember`,
    memberData
  );
  return response.data;
};

const memberService = {
  addMember,
  getMembers,
  getMember,
  deleteMember,
  updateMember,
};

export default memberService;
