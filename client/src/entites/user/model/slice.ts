import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api';
import { IUser } from './types';

export interface AuthState {
  isAuth: boolean;
  user: IUser | null;
  users: IUser[];
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  users: [],
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLoggedOut: (state) => {
      state.isAuth = false;
      state.user = null;
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.postLogin.matchFulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.user = payload;
    });
    builder.addMatcher(authApi.endpoints.postRegister.matchFulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.user = payload;
    });
    builder.addMatcher(authApi.endpoints.authCheck.matchFulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.user = payload;
    });
    builder.addMatcher(authApi.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

export const { setLoggedOut } = authSlice.actions;