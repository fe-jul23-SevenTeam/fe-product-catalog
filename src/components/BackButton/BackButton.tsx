import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left_icon.svg';

import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <button onClick={handleBackClick} className="phone__back-link back-link">
      <ArrowLeftIcon className="back-link__icon" />
      <span className="back-link__text">Back</span>
    </button>
  );
};
