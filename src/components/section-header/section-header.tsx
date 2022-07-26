import React, { FC } from 'react';
import { ReactComponent as EditIcon } from "./../../assets/images/edit.svg";

import './section-header.scss';

type TSectionHeaderProps = {
  value: string;
  edit?: boolean;
  onEditClick?: () => void;
};

const SectionHeader: FC<TSectionHeaderProps> = ({ value, edit, onEditClick }) => {
  return (
    <div className="header-wrapper">
      <h2 className="header-wrapper__title">{value}</h2>
      {edit && (
        <div
          className="icon-wrapper"
          onClick = {onEditClick}
        >
          <EditIcon className="edit"/>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
