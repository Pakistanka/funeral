import {
  TCompanyActions,
  GET_COMPANY_REQUEST,
  GET_COMPANY_REQUEST_SUCCESS,
  GET_COMPANY_REQUEST_FAILED,
  SAVE_COMPANY,
  SEND_PHOTO_REQUEST,
  SEND_PHOTO_REQUEST_SUCCESS,
  SEND_PHOTO_REQUEST_FAILED,
  SAVE_NEW_PHOTOS_ARRAY,
} from '../actions/company-actions';
import { TCompany } from "../../types";

type TCompanyState = {
  company: TCompany | null;

  getCompanyRequest: boolean;
  getCompanyRequestSuccess: boolean;
  getCompanyRequestFailed: boolean;

  isSendPhotoRequest: boolean;
  isSendPhotoRequestSuccess: boolean;
  isSendPhotoRequestFailed: boolean;
};

const initialState: TCompanyState = {
  company: null,

  getCompanyRequest: false,
  getCompanyRequestSuccess: false,
  getCompanyRequestFailed: false,

  isSendPhotoRequest: false,
  isSendPhotoRequestSuccess: false,
  isSendPhotoRequestFailed: false,
};

const companyReducer = (state = initialState, action: TCompanyActions) => {
  switch (action.type) {
    case GET_COMPANY_REQUEST: {
      return {
        ...state,
        getCompanyRequest: true,
        getCompanyRequestSuccess: false,
        getCompanyRequestFailed: false,
      };
    }
    case GET_COMPANY_REQUEST_SUCCESS: {
      return {
        ...state,
        company: action.company,
        getCompanyRequest: false,
        getCompanyRequestSuccess: true,
      };
    }
    case GET_COMPANY_REQUEST_FAILED: {
      return {
        ...state,
        getCompanyRequest: false,
        getCompanyRequestFailed: true,
      };
    }
    case SEND_PHOTO_REQUEST: {
      return {
        ...state,
        isSendPhotoRequest: true,
        isSendPhotoRequestSuccess: false,
        isSendPhotoRequestFailed: false,
      };
    }
    case SEND_PHOTO_REQUEST_SUCCESS: {
      if (!state.company) return state;
      return {
        ...state,
        company: {
          ...state.company,
          photos: [
            ...state.company.photos,
            action.photo,
          ]
        },
        isSendPhotoRequest: false,
        isSendPhotoRequestSuccess: true,
      };
    }
    case SEND_PHOTO_REQUEST_FAILED: {
      return {
        ...state,
        isSendPhotoRequest: false,
        isSendPhotoRequestFailed: true,
      };
    }
    case SAVE_COMPANY: {
      return {
        ...state,
        company: {
          ...state.company,
          ...action.form
        },
      }
    }
    case SAVE_NEW_PHOTOS_ARRAY: {
      return {
        ...state,
        company: {
          ...state.company,
          photos: action.photos,
        },
      }
    }
    default: {
      return state;
    }
  }
}

export default companyReducer;