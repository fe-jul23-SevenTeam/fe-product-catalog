import { FC, ReactNode } from 'react';

// Images
import { ReactComponent as Close } from 'assets/icons/close_icon.svg';
import { ReactComponent as Logo } from 'assets/Logo-svg.svg';

import './ModalWindow.scss';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
};

export const ModalWindow: FC<Props> = ({ children, isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-alignment">
      <div className="modal-window">
        <button onClick={close} className="modal-window__close-button">
          <Close className="modal-window__close-icon" />
        </button>
        <div className="modal-window__logo-container">
          <Logo className="modal-window__logo-container-icon" />
        </div>
        {children}
      </div>
    </div>
  );
};
