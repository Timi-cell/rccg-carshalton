import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredMembers: [],
  message: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SEARCH_MEMBERS(state, action) {
      const { search, members } = action.payload;
      if (search !== "") {
        const filtered = members.filter((member) =>
          member.name.toLowerCase().includes(search.trim().toLowerCase())
        );
        state.filteredMembers = filtered;
        if (filtered.length === 0) {
          state.message = true;
        }
      } else {
        state.filteredMembers = members;
        state.message = false;
      }
    },
    FILTER_MEMBERS(state, action) {
      const { fValue, members } = action.payload;

      if (fValue !== "") {
        if (fValue === "Birthdays") {
          const currentMonth = new Date().getMonth();
          const filtered = members.filter(
            (member) => new Date(member.DOB).getMonth() === currentMonth
          );
          state.filteredMembers = filtered;
          return;
        }
        const filtered = members.filter((member) => member.gender === fValue);
        state.filteredMembers = filtered;
      } else {
        state.filteredMembers = members;
      }
    },
  },
});

export const { SEARCH_MEMBERS, FILTER_MEMBERS } = filterSlice.actions;
export const selectfilteredMembers = (state) => state.filter.filteredMembers;
export const selectMessage = (state) => state.filter.message;
export default filterSlice.reducer;
