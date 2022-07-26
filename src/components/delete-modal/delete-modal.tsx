import React, { FC } from 'react';
import { closeModal } from '../../redux/actions/app-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import ModalButton from '../../assets/ui/modal-button/modal-button';
import deleteCompny from '../../utils/delete-company';
import Modal from '../modal/modal';

import './delete-modal.scss';

const DeleteModal: FC = () => {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((store) => store.companyState);

  const onDeleteClickHandler = () => {
    if (company) deleteCompny(company.id);
    dispatch(closeModal());
  };

  return (
    <Modal>
      <>
        <h1>Удалить карточку</h1>
        <span>Отправить карточку организации в архив?</span>
        <div className="modal-action">
          <ModalButton
            actionType="decline"
            value="ОТМЕНА"
            onClick={() => dispatch(closeModal())}
          />
          <ModalButton
            actionType="confirm"
            value="УДАЛИТЬ"
            onClick={onDeleteClickHandler}
          />
        </div>
      </>
    </Modal>
  );
};

export default DeleteModal;
