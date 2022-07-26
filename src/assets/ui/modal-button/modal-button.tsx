import React, { FC } from 'react';

import styles from './modal-button.module.scss';

type TModalButtomProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  actionType: 'confirm' | 'decline';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
};

const ModalButton: FC<TModalButtomProps> = ({ actionType, type, value, onClick}) => {
  let buttonColor = '';
  switch (actionType) {
    case 'confirm':
      buttonColor = styles.accept;
      break;
    default:
      buttonColor = styles.decline;
  }
  return (
    <button
      className={`${styles.modalButton} ${buttonColor}`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ModalButton;
