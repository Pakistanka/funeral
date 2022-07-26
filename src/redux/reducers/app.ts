import {
  CLOSE_MODAL,
  SET_IS_EDIT_MODAL,
  SET_IS_EDIT_COMMON_INFO_MODAL,
  SET_IS_EDIT_CONTACTS_MODAL,
  SET_IS_ADD_PHOTO_MODAL,
  SET_IS_EDIT_SHORT_NAME_MODAL
} from './../actions/app-actions';
import { SET_IS_DELETE_MODAL, TAppActions } from '../actions/app-actions';

type TAppState = {
  isDeleteModal: boolean;
  isEditModal: boolean;
  isEditCommonInfoModal: boolean;
  isEditContactsModal: boolean;
  isEditShortNameModal: boolean;
  isAddPhotoModal: boolean;

};

const initialState: TAppState = {
  isDeleteModal: false,
  isEditModal: false,
  isEditCommonInfoModal: false,
  isEditContactsModal: false,
  isEditShortNameModal: false,
  isAddPhotoModal: false,
};

const appReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case SET_IS_DELETE_MODAL: {
      return {
        ...state,
        isDeleteModal: true,
      };
    }
    case SET_IS_EDIT_MODAL: {
      return {
        ...state,
        isEditModal: true,
      };
    }
    case SET_IS_EDIT_COMMON_INFO_MODAL: {
      return {
        ...state,
        isEditCommonInfoModal: true,
      };
    }
    case SET_IS_EDIT_CONTACTS_MODAL: {
      return {
        ...state,
        isEditContactsModal: true,
      };
    }
    case SET_IS_ADD_PHOTO_MODAL: {
      return {
        ...state,
        isAddPhotoModal: true,
      };
    }
    case SET_IS_EDIT_SHORT_NAME_MODAL: {
      return {
        ...state,
        isEditShortNameModal: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isDeleteModal: false,
        isEditModal: false,
        isEditCommonInfoModal: false,
        isEditContactsModal: false,
        isEditShortNameModal: false,
        isAddPhotoModal: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default appReducer;