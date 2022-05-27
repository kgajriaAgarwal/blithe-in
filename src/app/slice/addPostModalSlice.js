import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addPostModal: false,
  postInfo: {},
  is_module: ""
};

const postModalSlice = createSlice({
  name: "postModal",
  initialState,
  reducers: {
    openPostModal: (state, action) => {
      state.addPostModal = true;
      state.postInfo = action?.payload?.feed;
      state.is_module = action?.payload?.is_module
    },
    closePostModal: (state) => {
      state.addPostModal = false;
      state.postInfo = {};
    },
  },
});

export const { openPostModal, closePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;