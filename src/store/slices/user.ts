import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserSlice {
  userId: string;
  email: string;
  userName: string;
  signedIn: boolean;
}

const initialState: UserSlice = {
  userId: "",
  email: "",
  userName: "",
  signedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSlice>) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.signedIn = action.payload.signedIn;
      state.userName = action.payload.userName;
    },
    resetUser: (state) => {
      state.userId = "";
      state.email = "";
      state.signedIn = false;
      state.userName = "";
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
