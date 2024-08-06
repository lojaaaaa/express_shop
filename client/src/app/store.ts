import { configureStore } from '@reduxjs/toolkit'
import { deviceSlice } from 'src/entites/devices/model'
import { authSlice } from 'src/entites/user/model'
import { baseApi } from 'src/shared/api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [deviceSlice.name]: deviceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch