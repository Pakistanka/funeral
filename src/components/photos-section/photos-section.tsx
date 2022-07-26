import React, { FC, FormEvent, MouseEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { TPhoto } from '../../types';
import Modal from '../modal/modal';
import Button from '../../assets/ui/button/button';
import { ReactComponent as PlusIcon } from "./../../assets/images/add.svg";
import Photo from '../photo/photo';
import SectionHeader from '../section-header/section-header';

import './photos-section.scss';
import { closeModal, setIsAddPhotoModal } from '../../redux/actions/app-actions';
import ModalButton from '../../assets/ui/modal-button/modal-button';
import { sendPhotoThunk } from '../../redux/actions/company-actions';

const PhotosSection: FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((store) => store.appState.isAddPhotoModal);
  const { company } = useAppSelector((store) => store.companyState);
  const formRef = useRef<HTMLFormElement>(null);
  if (!company) return null;

  const onButtonClickHandler = () => {
    dispatch(setIsAddPhotoModal());
  };

  const onCancelClick = () => {
    dispatch(closeModal());
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (formRef.current) {
      const fileInput = formRef.current.elements[0] as HTMLInputElement;
      if (fileInput.files) {
        const formData = new FormData();
        console.log(fileInput.name)
        formData.append('file', fileInput.files[0]);
        dispatch(sendPhotoThunk(company.id, formData));
        dispatch(closeModal());
      }
    }
  };

  return (
    <section className="photoes">
      <SectionHeader value="Приложенные фото" />
      <div className="photoes__wrap">
        {company?.photos.map((photo: TPhoto, index: number) => <Photo photo={photo} key={index} />)}
      </div>
      <Button
        icon={<PlusIcon />}
        onClick={onButtonClickHandler}
      >
        Добавить изображение
      </Button>
      {isModalOpen && (
        <Modal>
          <>
            <h1>Добавить изображение</h1>
            <form
              className="photoes__form"
              onSubmit={onSubmitHandler}
              name="file"
              ref={formRef}
            >
              <input type="file" />
            </form>
            <div className="photoes__actions">
              <ModalButton actionType="decline" value="ОТМЕНА" onClick={onCancelClick} />
              <ModalButton type='submit' actionType="confirm" value="СОХРАНИТЬ" onClick={onClickHandler} />
            </div>
          </>
        </Modal>
      )}
    </section>
  );
};

export default PhotosSection;
