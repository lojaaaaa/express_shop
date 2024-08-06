import { RootState } from "src/app/store";

export const selectDevices = (state: RootState) =>
  state.deviceSlice.devices;

export const selectDeviceInfo = (state: RootState) =>
  state.deviceSlice.deviceInfo;


