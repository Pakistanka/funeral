import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { closeModal, setIsEditShortNameModal } from '../../redux/actions/app-actions';
import { saveCompany, saveCompanyRequestThunk } from '../../redux/actions/company-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { ReactComponent as EditIcon } from "./../../assets/images/edit.svg";
import EditModal from '../edit-modal/edit-modal';

import './short-name-section.scss';

type TFormState = {
  [name: string]: string;
};

const ShortNameSection: FC = () => {
  const title = 'Название организации';
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((store) => store.companyState);
  const isModalOpen = useAppSelector((store) => store.appState.isEditShortNameModal);
  const info = company ? [
    {
      title: 'Название:',
      value: company.shortName,
      id: "shortName",
    },
  ] : [];
  const [formState, setFormState] = useState<TFormState | null>(null);

  useEffect(() => {
    if (company && !formState) setFormState(info.reduce((acc, el) => {return { ...acc, [el.id]: el.value }}, {}));
  }, [company])

  const onEditClick = () => {
    dispatch(setIsEditShortNameModal());
  };

  const onSaveClick = () => {
    if (!formState) return;

    const formToSave: any = {};
    const formStateKeys = Object.keys({ ...formState });
    for (let i = 0; i < formStateKeys.length; i++) {
      formToSave[formStateKeys[i]] = formState[formStateKeys[i]];
    }

    setFormState(null);
    dispatch(saveCompany(formToSave))
    dispatch(saveCompanyRequestThunk(company.id, formToSave));
    dispatch(closeModal());
  };

  const onCancelClick = () => dispatch(closeModal());

  const onFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormState({ ...formState, [name]: value });
  };

  if (!company) return null;

  return (
    <div className="title">
      <h1 className="title__header">{company?.shortName}</h1>
      <div
        className="iconWrapper"
        onClick={onEditClick}
      >
        <EditIcon className="edit"/>
      </div>
      {isModalOpen && formState && (
        <EditModal
          title={title}
          info={info}
          formState={formState}
          onFormInputChange={onFormInputChange}
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
        />
      )}
    </div>
  );
};

export default ShortNameSection;
