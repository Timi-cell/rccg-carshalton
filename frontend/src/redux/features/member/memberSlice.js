import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memberService from "../../../services/memberService";
import { toast } from "react-toastify";

const initialState = {
  members: [],
  member: {},
  loadingStatus: "idle",
  males: 0,
  females: 0,
};

// Add Member
export const addMember = createAsyncThunk(
  "members/add",
  async (memberData, thunkAPI) => {
    try {
      return await memberService.addMember(memberData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Single Member
export const getMember = createAsyncThunk(
  "members/getOne",
  async (id, thunkAPI) => {
    try {
      return await memberService.getMember(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Get All Members
export const getMembers = createAsyncThunk(
  "members/getAll",
  async (_, thunkAPI) => {
    try {
      return await memberService.getMembers();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Member
export const deleteMember = createAsyncThunk(
  "member/deleteOne",
  async (id, thunkAPI) => {
    try {
      return await memberService.deleteMember(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Member
export const updateMember = createAsyncThunk(
  "members/updateOne",
  async (memberData, thunkAPI) => {
    try {
      return await memberService.updateMember(memberData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    SET_MEMBER_INFO(state, action) {
      state.member = action.payload;
    },
    CALC_MALE(state, action) {
      const members = action.payload.filter(
        (member) => member.gender === "Male"
      );
      state.males = members.length;
    },
    CALC_FEMALE(state, action) {
      const members = action.payload.filter(
        (member) => member.gender === "Female"
      );
      state.females = members.length;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(addMember.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(addMember.fulfilled, (state, action) => {
      const { allMembers } = action.payload;
      state.members = allMembers;

      state.loadingStatus = "succeeded";
      toast.success(`Member added!`, {
        position: toast.POSITION.TOP_LEFT,
      });
    });
    builder.addCase(addMember.rejected, (state, action) => {
      state.loadingStatus = "failed";

      toast.error(action.payload.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    });
    builder.addCase(getMember.pending, (state) => {
      state.loadingStatus = "loading";

    });
    builder.addCase(getMember.fulfilled, (state, action) => {
      state.member = action.payload;
      state.loadingStatus = "succeeded";

    });
    builder.addCase(getMember.rejected, (state) => {

      state.loadingStatus = "failed";
    });
    builder.addCase(getMembers.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.members = action.payload;
      state.loadingStatus = "succeeded";
    });
    builder.addCase(getMembers.rejected, (state) => {
      state.loadingStatus = "failed";
    });
    builder.addCase(deleteMember.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(deleteMember.fulfilled, (state, action) => {
      state.loadingStatus = "succeeded";
      state.members = action.payload;
      toast.success("Member deleted!", {
        position: toast.POSITION.TOP_LEFT,
      });
    });
    builder.addCase(deleteMember.rejected, (state, action) => {
      state.loadingStatus = "failed";
      toast.error(action.payload.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    });
    builder.addCase(updateMember.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(updateMember.fulfilled, (state, action) => {
      state.members = action.payload;
      state.loadingStatus = "succeeded";
      toast.success("Member info updated!", {
        position: toast.POSITION.TOP_LEFT,
      });
    });
    builder.addCase(updateMember.rejected, (state, action) => {
      state.loadingStatus = "failed";
      toast.error(action.payload.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    });
  },
});

export const { CALC_MALE, CALC_FEMALE, SET_MEMBER_INFO } = memberSlice.actions;
export default memberSlice.reducer;
