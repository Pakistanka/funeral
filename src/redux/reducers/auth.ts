import { TAuthActions } from "../actions/auth-actions";

type TAuthState = {
  isAuth: boolean;
  accessToken: string;
};

const initialState: TAuthState = {
  isAuth: false,
  accessToken: '',
};

const authReducer = (state = initialState, action: TAuthActions) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default authReducer;