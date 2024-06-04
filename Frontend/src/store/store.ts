import { configureStore } from '@reduxjs/toolkit'
import { helloWorldApi } from '../services/helloWorldApi';

export const store = configureStore({
  reducer: {
    [helloWorldApi.reducerPath]: helloWorldApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(helloWorldApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
