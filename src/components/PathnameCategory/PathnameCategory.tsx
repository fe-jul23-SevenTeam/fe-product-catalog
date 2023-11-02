import { Link } from 'react-router-dom';
import './PathnameCategory.scss';

import { ReactComponent as HomeIcon } from '../../assets/icons/home_icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right_icon.svg';

interface Props {
    category: string;
}

export const PathnameCategory: React.FC<Props> = ({ category }) => (
  <div className="pathname">
    <Link className="pathname__home" to="/">
      <HomeIcon />
    </Link>

    <ArrowRightIcon className="pathname__arrow" />

    <Link className="pathname__category" to={category}>
      {category}
    </Link>
  </div>
);
