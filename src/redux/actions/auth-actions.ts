import { AppDispatch } from "../../services/store";
// import logIn from "../../utils/log-in";

/* eslint-disable @typescript-eslint/prefer-as-const */
export const LOG_IN_REQUEST: 'LOG_IN_REQUEST' = 'LOG_IN_REQUEST';
export const LOG_IN_REQUEST_SUCCESS: 'LOG_IN_REQUEST_SUCCESS' = 'LOG_IN_REQUEST_SUCCESS';
export const LOG_IN_REQUEST_FAILED: 'LOG_IN_REQUEST_FAILED' = 'LOG_IN_REQUEST_FAILED';

type TLogInRequest = {
  type: typeof LOG_IN_REQUEST;
};

type TLogInRequestSuccess = {
  type: typeof LOG_IN_REQUEST_SUCCESS;
};

type TLogInRequestFailed = {
  type: typeof LOG_IN_REQUEST_FAILED;
};

export type TAuthActions = TLogInRequest |
  TLogInRequestSuccess |
  TLogInRequestFailed;

export const logInRequest = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

export const logInRequestSuccess = () => {
  return {
    type: LOG_IN_REQUEST_SUCCESS,
  };
};

export const logInRequestFailed = () => {
  return {
    type: LOG_IN_REQUEST_FAILED,
  };
};

export const logInThunk = () => async (dispatch: AppDispatch) => {
  dispatch(logInRequest());
  try {
    // const logInData = await logIn();
    // dispatch(logInRequestSuccess(login.authorization));
  } catch (error) {
    dispatch(logInRequestFailed());
  }
};
