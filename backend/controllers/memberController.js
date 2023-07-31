const asyncHandler = require("express-async-handler");
const Member = require("../models/memberModel");
const sendEmail = require("../utils/sendEmail");

// Add Member
const addMember = asyncHandler(async (req, res) => {
  const {
    name,
    gender,
    DOB,
    email,
    occupation,
    address,
    maritalStatus,
    phone,
  } = req.body;
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
    res.status(400).json({ message: "Please fill in all required fields" });
  }
  const member = await Member.create({
    name,
    gender,
    DOB,
    email,
    occupation,
    address,
    maritalStatus,
    phone,
  });
  const allMembers = await Member.find({}).sort({
    createdAt: -1,
  });
  if (member) {
    res.status(201).json({ allMembers });
    // res.status(201).json({ message: "Member Added!" });
  } else {
    res.status(500).json({
      message: "Please check your network connectivity OR refresh the page.",
    });
    throw new Error(
      "Please check your network connectivity OR refresh the page."
    );
  }
});

// Update Member
const updateMember = asyncHandler(async (req, res) => {
  const updatedMember = await Member.findByIdAndUpdate(
    { _id: req.body.id },
    {
      name: req.body.name,
      gender: req.body.gender,
      DOB: req.body.DOB,
      email: req.body.email,
      occupation: req.body.occupation,
      address: req.body.address,
      maritalStatus: req.body.maritalStatus,
      phone: req.body.phone,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  const allMembers = await Member.find({}).sort({
    createdAt: -1,
  });
  if (updatedMember) {
    res.status(200).json(allMembers);
  } else {
    res.status(400).json({ message: "Member Info could not be updated" });
    throw new Error("Member Info could not be updated");
  }
});

// Get All Members
const getMembers = asyncHandler(async (req, res) => {
  const allMembers = await Member.find({}).sort({
    createdAt: -1,
  });
  if (allMembers) {
    res.status(200).json(allMembers);
  } else {
    res.status(400).json({ message: "Members not found" });
    throw new Error("Members not found");
  }
});

// Get Single Member
const getMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);
  if (member) {
    res.status(200).json(member);
  } else {
    res.status(400).json({ message: "Member not found" });
  }
});

// Delete Member
const deleteMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);
  if (member) {
    await Member.deleteOne({ _id: id });
    const allMembers = await Member.find({}).sort({
      createdAt: -1,
    });
    // res.status(200).json(allMembers);
    res.status(200).json(allMembers);
  } else {
    res.status(400).json({ message: "Member not found" });
    throw new Error("Member not found");
  }
});

// Get Member Message
const getMemberMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;
  const send_from = process.env.EMAIL_USER;
  const send_to = process.env.EMAIL_CHURCH;
  const reply_to = email;
  const subject = `New message from the church website`;
  const msg = `
<h2>Hello, RCCG Carshalton.</h2>
<p>My name is ${name}.</p>

<p>${message}</p>

<p>Here is my phone number: ${phone}</p>
<h4>Regards, ${name}.</h4>
`;

  try {
    await sendEmail(subject, msg, send_to, send_from, reply_to);
    res.status(200).json({
      success: true,
      message: "Message successfully sent!",
    });
  } catch (error) {
    res.status(500);
    throw new Error("Report not sent, please try again");
  }
});

module.exports = {
  addMember,
  updateMember,
  getMembers,
  getMember,
  deleteMember,
  getMemberMessage,
};
