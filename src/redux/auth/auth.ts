import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const loginData = {
  rightUser: "erickkarl",
  rightPassword: "senha",
};

export interface LoginPayload {
  user: string;
  password: string;
}
export interface AuthState {
  signedIn: boolean;
}

const initialState: AuthState = {
  signedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.signedIn =
        action.payload.user === loginData.rightUser &&
        action.payload.password === loginData.rightPassword;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
