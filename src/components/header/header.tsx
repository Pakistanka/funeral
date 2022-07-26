import React from 'react';
import { ReactComponent as LinkedIcon } from './../../assets/images/linked.svg';
import { ReactComponent as TrashIcon } from './../../assets/images/trash.svg';
import { ReactComponent as RotationIcon } from "./../../assets/images/rotation.svg";
import { ReactComponent as ArrowIcon } from "./../../assets/images/back-arrow.svg";

import { setIsDeleteModal } from '../../redux/actions/app-actions';

import './header.scss';
import { useAppDispatch } from '../../services/hooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const onDeleteClickHandler = () => {
    dispatch(setIsDeleteModal());
  };

  return (
    <header className="header">
      <div className="header__backwrapper">
        {/* <img className="header__arrow" src={arrow} alt="" /> */}
        <ArrowIcon className="header__arrow"/>
        К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
      </div>
      <div className="header__controls">
        <div className="header__element">
          <LinkedIcon className="linked"/>
        </div>
        <div className="header__element">
          <RotationIcon className="rotation"/>
        </div>
        <div className="header__element" onClick={onDeleteClickHandler}>
          <TrashIcon className="trash" />
        </div>
      </div>
    </header>
  );
};

export default Header;
