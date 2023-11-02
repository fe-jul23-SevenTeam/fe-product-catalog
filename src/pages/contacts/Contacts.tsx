// import { ReactComponent as Close } from '../../assets/icons/close_icon.svg';
import { Link } from 'react-router-dom';
import { BackButton } from 'components/BackButton/BackButton';
import './Contacts.scss';
import { ReactComponent as EmailIcon } from '../../assets/icons/social-media_icon/email-svg.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/social-media_icon/github-svgrepo-com.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/social-media_icon/linkedin-svg.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/social-media_icon/telegram-svg.svg';

import RostyslavImg from 'assets/personal-photo/rostyslav-kravchuk.png';
import ViktoriaImg from 'assets/personal-photo/viktoria-roik.png';
import ValentynImg from 'assets/personal-photo/Valentyn.png';
import VitaliiImg from 'assets/personal-photo/Vitalii.png';
import AndriiImg from 'assets/personal-photo/Andrii.png';

export const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <BackButton />

      <div className="contacts__container">
        <div className="contacts__container--content">
          <p className="section-head">Our Team</p>
          <p className="section-text">
            Our web development team is proud of this website. Every line of
            code, every design element, every feature is the result of our hard
            work and creativity. We put a part of ourselves into every project,
            and this gives our works soul and uniqueness. Giving attention to
            every detail, we created an interface in which we invested a part of
            ourselves, and this adds uniqueness to our work. We are proud of the
            work done and are always ready to present the world with new
            innovations and unique solutions in the web environment.
          </p>
        </div>

        <div className="contacts__container--team team">
          <div className="team__card">
            <div className="team__img-box">
              <img
                className="team__person-img"
                src={ValentynImg}
                alt="TeamMate Valentyn"
              />
            </div>
            <div className="team__content-box">
              <div className="team__content-box__text">
                <p className="team__person-name">Bilyk Valentyn</p>
                <p className="team__person-info">Full-Stack developer</p>
              </div>
              <div className="team__social-media social-media">
                <Link
                  to="https://www.linkedin.com/in/valentyn-bilyk/"
                  className="social-media__link"
                  target="_blank"
                >
                  <LinkedInIcon className="social-media__icon" />
                </Link>
                <Link
                  to="https://github.com/Valentyn-Bilyk"
                  className="social-media__link"
                  target="_blank"
                >
                  <GithubIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <EmailIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <TelegramIcon className="social-media__icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="team__card">
            <div className="team__img-box">
              <img
                className="team__person-img"
                src={RostyslavImg}
                alt="TeamMate Rostyslav"
              />
            </div>
            <div className="team__content-box">
              <div className="team__content-box__text">
                <p className="team__person-name">Kravchuk Rostyslav</p>
                <p className="team__person-info">Full-Stack developer</p>
              </div>

              <div className="team__social-media social-media">
                <Link
                  to="https://www.linkedin.com/in/rostyslav-kravchuk-8b5355261/"
                  className="social-media__link"
                  target="_blank"
                >
                  <LinkedInIcon className="social-media__icon" />
                </Link>
                <Link
                  to="https://github.com/rostyslav48"
                  className="social-media__link"
                  target="_blank"
                >
                  <GithubIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <EmailIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <TelegramIcon className="social-media__icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="team__card">
            <div className="team__img-box">
              <img
                className="team__person-img"
                src={AndriiImg}
                alt="TeamMate Andrii"
              />
            </div>
            <div className="team__content-box">
              <div className="team__content-box__text">
                <p className="team__person-name">Nakonechnyi Andrii</p>
                <p className="team__person-info">Full-Stack developer</p>
              </div>

              <div className="team__social-media social-media">
                <Link
                  to="https://www.linkedin.com/in/andrii-nakonechnyi-180005198/"
                  className="social-media__link"
                  target="_blank"
                >
                  <LinkedInIcon className="social-media__icon" />
                </Link>
                <Link
                  to="https://github.com/annak1104"
                  className="social-media__link"
                  target="_blank"
                >
                  <GithubIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <EmailIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <TelegramIcon className="social-media__icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="team__card">
            <div className="team__img-box">
              <img
                className="team__person-img"
                src={ViktoriaImg}
                alt="TeamMate Viktoriia"
              />
            </div>
            <div className="team__content-box">
              <div className="team__content-box__text">
                <p className="team__person-name">Roik Viktoriia</p>
                <p className="team__person-info">Full-Stack developer</p>
              </div>

              <div className="team__social-media social-media">
                <Link
                  to="https://www.linkedin.com/in/viktoriia-roik/"
                  className="social-media__link"
                  target="_blank"
                >
                  <LinkedInIcon className="social-media__icon" />
                </Link>
                <Link
                  to="https://github.com/viktoria-roik"
                  className="social-media__link"
                  target="_blank"
                >
                  <GithubIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <EmailIcon className="social-media__icon" />
                </Link>
                <Link
                  to="https://t.me/vroik"
                  className="social-media__link"
                  target="_blank"
                >
                  <TelegramIcon className="social-media__icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="team__card">
            <div className="team__img-box">
              <img
                className="team__person-img"
                src={VitaliiImg}
                alt="TeamMate Vitalii"
              />
            </div>
            <div className="team__content-box">
              <div className="team__content-box__text">
                <p className="team__person-name">Serhiichuk Vitalii</p>
                <p className="team__person-info">Full-Stack developer</p>
              </div>

              <div className="team__social-media social-media">
                <Link
                  to="https://www.linkedin.com/in/vitalii-serhiichuk-3b29a8247/"
                  className="social-media__link"
                  target="_blank"
                >
                  <LinkedInIcon className="social-media__icon" />
                </Link>
                <Link
                  to="https://github.com/vserhiichuk"
                  className="social-media__link"
                  target="_blank"
                >
                  <GithubIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <EmailIcon className="social-media__icon" />
                </Link>
                <Link to="/" className="social-media__link">
                  <TelegramIcon className="social-media__icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
