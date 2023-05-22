import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slice/user.slice';

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: getDefaultMiddleware =>
        __DEV__
            ? getDefaultMiddleware({serializableCheck: false})
                  .concat(createDebugger())
                  .concat()
            : getDefaultMiddleware({
                  serializableCheck: false,
              }).concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
