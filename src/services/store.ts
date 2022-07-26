import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from '../redux/reducers/app';
import authReducer from '../redux/reducers/auth';
import companyReducer from '../redux/reducers/company';
import contactReducer from '../redux/reducers/contact';

export const store = configureStore({
  reducer: {
    authState: authReducer,
    companyState: companyReducer,
    contactState: contactReducer,
    appState: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
