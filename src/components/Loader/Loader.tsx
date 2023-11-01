import { RingLoader } from 'react-spinners';

import './Loader.scss';

export const Loader = () => (
  <div className="loader">
    <RingLoader className="loader__ring" />
  </div>
);
