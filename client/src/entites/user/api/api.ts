import { IUser, LoginFormData, UserResponse } from '../model/types';
import { jwtDecode } from 'jwt-decode'
import { baseApi } from 'src/shared/api';
import { setTokenLocalstorage } from 'src/shared/lib';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation<IUser, LoginFormData>({
      query: (credentials) => ({
        url: '/user/login',
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
        url: '/user/registration',
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
        url: '/user/auth',
        method: 'GET',
      }),
      transformResponse: (response: UserResponse) => {
        const { token } = response;
        return jwtDecode(token);
      },
    }),

    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
      transformResponse: (response: IUser[]) => {
        return response
      },
    }),
  }),
})

export const { usePostLoginMutation, usePostRegisterMutation , useAuthCheckQuery, useGetUsersQuery } = authApi;
