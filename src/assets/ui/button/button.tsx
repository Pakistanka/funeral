import React, { FC } from 'react';

import './button.scss';

type TButtonProps = {
  children?: JSX.Element | string;
  icon?: JSX.Element;
  onClick?: (e: React.MouseEvent) => void
};

const Button: FC<TButtonProps> = ({ children, icon, onClick }) => {
  return (
    <button
      className="button"
      onClick={(e) => (typeof onClick === 'function') ? onClick(e) : null}
    >
      {!!icon && (
        <div className="button__icon">
          {icon}
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
