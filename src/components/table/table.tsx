import phoneFormatter from 'phone-formatter';
import React, { FC, Fragment } from 'react';

import './table.scss';

type TTableProps = {
  infoArray: Array<{
    title: string;
    value: string | JSX.Element;
    id: string;
  }>;
}

const Table: FC<TTableProps> = ({ infoArray }) => {
  return (
    <div className="table">
      {infoArray.map((el) => {
        if (el.id === 'phone') {
          let phone;
          if (typeof el.value === 'string') {
            phone = phoneFormatter.format(el.value, '+7 (NNN) NNN-NN-NN');
          }

          return (
            <Fragment key={el.id}>
              <div className="table__title">
                {el.title}
              </div>
              <div className="table__value">
                {phone}
              </div>
            </Fragment>
          )
        }
        return (
          <Fragment key={el.id}>
            <div className="table__title">
              {el.title}
            </div>
            <div className="table__value">
              {el.value}
            </div>
          </Fragment>
        )
      })}
    </div>
  );
};

export default Table;
