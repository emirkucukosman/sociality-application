import { configureStore } from '@reduxjs/toolkit';

// Reducers
import layoutReducer from '~/slices/layoutSlice';

// Services
import { socialityApi } from '~/services/socialityApi';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    [socialityApi.reducerPath]: socialityApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socialityApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;

export default store;
