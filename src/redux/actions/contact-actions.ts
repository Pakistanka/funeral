import { TContact } from '../../types';
import { AppDispatch } from "../../services/store";
import getContact from "../../utils/get-contact";

/* eslint-disable @typescript-eslint/prefer-as-const */
export const GET_CONTACT_REQUEST: 'GET_CONTACT_REQUEST' = 'GET_CONTACT_REQUEST';
export const GET_CONTACT_REQUEST_SUCCESS: 'GET_CONTACT_REQUEST_SUCCESS' = 'GET_CONTACT_REQUEST_SUCCESS';
export const GET_CONTACT_REQUEST_FAILED: 'GET_CONTACT_REQUEST_FAILED' = 'GET_CONTACT_REQUEST_FAILED';
export const SAVE_CONTACTS: 'SAVE_CONTACTS' = 'SAVE_CONTACTS'; 

type TCotactRequest = {
  type: typeof GET_CONTACT_REQUEST;
};

type TCotactRequestSuccess = {
  type: typeof GET_CONTACT_REQUEST_SUCCESS;
  contact: TContact;
};

type TCotactRequestFailed = {
  type: typeof GET_CONTACT_REQUEST_FAILED;
};

type TSaveContacts = {
  type: typeof SAVE_CONTACTS;
  form: TContact;
};

export type TContactActions = TCotactRequest |
  TCotactRequestSuccess |
  TSaveContacts |
  TCotactRequestFailed;

export const getContactRequest = () => {
  return {
    type: GET_CONTACT_REQUEST,
  };
};

export const getContactRequestSuccess = (contact: TContact) => {
  return {
    type: GET_CONTACT_REQUEST_SUCCESS,
    contact
  };
};

export const getContactRequestFailed = () => {
  return {
    type: GET_CONTACT_REQUEST_FAILED,
  };
};

export const saveContacts = (form: TContact) => {
  return {
    type: SAVE_CONTACTS,
    form,
  };
};

export const getContactThunk = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(getContactRequest());
  try {
    const contactData = await getContact(id);
    dispatch(getContactRequestSuccess(contactData));
  } catch (error) {
    dispatch(getContactRequestFailed());
  }
};
