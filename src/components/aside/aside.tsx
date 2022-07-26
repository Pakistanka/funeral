import React, { FC } from 'react';

import './aside.scss';

import home from './../../assets/images/home.svg';
import market from './../../assets/images/market.svg';
import search from './../../assets/images/search.svg';
import chat from './../../assets/images/chat.svg';
import exit from './../../assets/images/exit.svg';
import settings from './../../assets/images/settings.svg';
import { ReactComponent as BuildingIcon } from "./../../assets/images/building.svg";

const Aside: FC = () => {
  return (
    <aside className="aside">
      <div  className="aside__wrapper">
        <nav className="aside__nav navigation">
          <div className="navigation__top">
            <div className="navigation__elem">
              <img src={home} alt="" />
            </div>
            <div className="navigation__elem navigation__elem--active">
              <img src={market} alt="" />
            </div>
            <div className="navigation__elem">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="navigation__bot">
            <div className="navigation__elem">
              <img src={settings} alt="" />
            </div>
            <div className="navigation__elem">
              <img src={chat} alt="" />
            </div>
            <div className="navigation__elem">
              <img src={exit} alt="" />
            </div>
          </div>
        </nav>
      </div>
      <div className="aside__menu menu">
        <div className="aside__gradient gradient" />
        <div className="aside__logo logo">
          <span className="logo__title">ЧЕСТНЫЙ АГЕНТ</span>
          <span className="logo__subtitle">МЕНЕДЖЕР ПРОЦЕССА</span>
        </div>
        <div className="aside__organization">
          <BuildingIcon />
          Организации
        </div>
      </div>
    </aside>
  )
};

export default Aside;
