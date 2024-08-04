import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, LoginFormData, UserResponse } from '../model/types';
import { jwtDecode } from 'jwt-decode'
import { setTokenLocalstorage } from 'src/shared/lib';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/user', 
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    postLogin: builder.mutation<IUser, LoginFormData>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: UserResponse) => {
        const { token } = response;
        setTokenLocalstorage(token);
        return jwtDecode(token);
      },
    }),

    postRegister: builder.mutation<IUser, LoginFormData>({
      query: (credentials) => ({
        url: '/registration',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: UserResponse) => {
        const { token } = response;
        setTokenLocalstorage(token);
        return jwtDecode(token);
      },
    }),


    authCheck: builder.query<IUser, void>({
      query: () => ({
        url: '/auth',
        method: 'GET',
      }),
      transformResponse: (response: UserResponse) => {
        const { token } = response;
        return jwtDecode(token);
      },
    }),
  }),
})

export const { usePostLoginMutation, usePostRegisterMutation , useAuthCheckQuery } = authApi;
