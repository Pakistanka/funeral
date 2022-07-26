import React, { FC } from 'react';
import { deletePhotoThunk, saveNewPhotosArray } from '../../redux/actions/company-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { TPhoto } from '../../types';
import { ReactComponent as CloseIcon } from "./../../assets/images/close_menu.svg";

import './photo.scss';

type TPhotoProps = {
  photo: TPhoto;
}

const Photo: FC<TPhotoProps> = ({ photo }) => {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((store) => store.companyState);

  if (!company) return null;

  const onDeleteClick = () => {
    dispatch(deletePhotoThunk(company.id, photo.name));
    const photos = [...company.photos];
    const deletePhotoIndex = photos.findIndex((el: TPhoto) => photo.name === el.name);
    photos.splice(deletePhotoIndex, 1);
    dispatch(saveNewPhotosArray(photos));
  };

  return (
      <figure className="photo">
        <img src={photo.thumbpath} alt={photo.name} />
        <div
          className="photo__icon"
          onClick={onDeleteClick}
        >
          <CloseIcon className="photo__close"/>
        </div>
        <figcaption className="photo__figcaption">
          <span className="photo__name">{photo.name}</span>
          <span className="photo__date">11 июня 2018</span>
        </figcaption>
      </figure>
  );
};

export default Photo;
