import { DeviceResponse, IDevice } from '../model/types';
import { baseApi } from 'src/shared/api';

export const deviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDevices: builder.query<IDevice[], void>({
      query: () => ({
        url: '/device',
        method: 'GET',
      }),
      transformResponse: (response: DeviceResponse) => {
        return response.rows;
      },
    }),

    getDeviceInfo: builder.query<IDevice, number>({
      query: (id) => ({
        url: `/device/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: IDevice) => {
        return response;
      },
    }),
  }),
})

export const { useGetDevicesQuery, useGetDeviceInfoQuery } = deviceApi;
