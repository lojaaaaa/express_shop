import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:5000'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL + '/api', 
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['main'],
  baseQuery,
  endpoints: () => ({}),  
});
