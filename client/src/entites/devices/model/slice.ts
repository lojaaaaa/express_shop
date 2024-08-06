import { createSlice } from '@reduxjs/toolkit';
import { IDevice } from './types';
import { deviceApi } from '../api';

export interface DeviceState {
  devices: IDevice[];
  deviceInfo: IDevice | null;
}

const initialState: DeviceState = {
  devices: [],
  deviceInfo: null,
};

export const deviceSlice = createSlice({
  name: 'deviceSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(deviceApi.endpoints.getDevices.matchFulfilled, (state, { payload }) => {
      state.devices = payload;
    });
    builder.addMatcher(deviceApi.endpoints.getDeviceInfo.matchFulfilled, (state, { payload }) => {
      state.deviceInfo = payload;
    });
  },
});
