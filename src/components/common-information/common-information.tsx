import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import moment from 'moment';
import { closeModal, setIsEditCommonInfoModal } from '../../redux/actions/app-actions';
import { saveCompany, saveCompanyRequestThunk } from '../../redux/actions/company-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import Table from '../table/table';
import SectionHeader from '../section-header/section-header';

import './common-information.scss';
import EditModal from '../edit-modal/edit-modal';

type TFormState = {
  [name: string]: string;
};

const CommonInformation: FC = () => {
  const title = 'Общая информация';
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((store) => store.companyState);
  const isModalOpen = useAppSelector((store) => store.appState.isEditCommonInfoModal);
  const date = company ? moment(company.contract?.issue_date) : null;
  const info = company && date ? [
    {
      title: 'Полное название:',
      value: company.name,
      id: "name",
    },
    {
      title: 'Договор:',
      value: `${company.contract?.no} от ${date.format('DD.MM.YYYY')}`,
      id: "contract",
    },
    {
      title: 'Форма:',
      value: company.businessEntity,
      id: "businessEntity",
    },
    {
      title: 'Тип:',
      value: company.type?.reduce((acc: string, el: string) => `${acc}, ${el}`),
      id: "type",
    },
  ] : [];
  const [formState, setFormState] = useState<TFormState | null>(null);

  useEffect(() => {
    if (company && !formState) setFormState(info.reduce((acc, el) => {return { ...acc, [el.id]: el.value }}, {}));
  }, [company])

  const onEditClick = () => {
    dispatch(setIsEditCommonInfoModal());
  };

  const onSaveClick = () => {
    const contract = formState ? formState.contract : '';
    if (!contract || !formState || !company || !company.id) return;

    const contractNoMatch = contract.match(/\d+/);
    const contractNo = contractNoMatch ? contractNoMatch[0] : '';

    const contractDateMatch = contract.match(/\d\d.\d\d.\d\d\d\d/);
    const dateSplited = contractDateMatch ? contractDateMatch[0].split('.') : [];
    const saveDate = dateSplited.length ? moment(contractDateMatch ? contractDateMatch[0] : '', 'DD.MM.YYYY') : moment();

    const formToSave: any = {};
    const formStateKeys = Object.keys({ ...formState });
    for (let i = 0; i < formStateKeys.length; i++) {
      if (formStateKeys[i] === 'contract') {
        formToSave[formStateKeys[i]] = { no: contractNo, issue_date: saveDate.utcOffset(0, true).format() };
      } else if (formStateKeys[i] === 'type') {
        formToSave[formStateKeys[i]] = formState.type.split(', ');
      } else {
        formToSave[formStateKeys[i]] = formState[formStateKeys[i]];
      }
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
    <section className="common">
      <SectionHeader value={title} onEditClick={onEditClick} edit />
      <Table infoArray={info} />
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
    </section>
  );
};

export default CommonInformation;
