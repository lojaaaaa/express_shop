import { RootState } from "src/app/store";

export const selectIsAuth = (state: RootState) =>
  state.authSlice.isAuth;

export const selectUser = (state: RootState) =>
  state.authSlice.user;

