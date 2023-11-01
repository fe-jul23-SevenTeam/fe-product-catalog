import { useNavigate } from 'react-router';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left_icon.svg';
import './PageNotFound.scss';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="not-found">
      <h1 className="not-found__number">404</h1>

      <button onClick={handleBackClick} className="not-found__btn">
        <ArrowLeftIcon className="not-found__btn-icon" />
        <span className="not-found__btn-text">Go Home</span>
      </button>
    </div>
  );
};
