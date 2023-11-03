import { ReactComponent as SuccessCircle } from 'assets/icons/success_circle-icon.svg';
import { ReactComponent as SuccessEmoji } from 'assets/icons/success_emoji-icon.svg';

import './SuccessContent.scss';

export const SuccessContent = () => {
  return (
    <div className="success-content">
      <h1 className="success-content__title">
        Successfully <SuccessEmoji />
      </h1>

      <div className="success-content__circle">
        <SuccessCircle />
      </div>

      <p className="success-content__text">
        Your order has been successfully completed. Wait for a call from the
        manager to confirm your personal information. Thank you for trusting
        Nice Gadgets store We value you!
      </p>
    </div>
  );
};
