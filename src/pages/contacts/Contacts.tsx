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

const teamMembers = [
  {
    name: 'Bilyk Valentyn',
    imageSrc: ValentynImg,
    linkedinLink: 'https://www.linkedin.com/in/valentyn-bilyk/',
    githubLink: 'https://github.com/Valentyn-Bilyk',
    emailLink: 'mailto:valentynbilyk.dev@gmail.com',
    telegramLink: 'https://t.me/valentyn_bilyk',
  },
  {
    name: 'Kravchuk Rostyslav',
    imageSrc: RostyslavImg,
    linkedinLink: 'https://www.linkedin.com/in/rostyslav-kravchuk-8b5355261/',
    githubLink: 'https://github.com/rostyslav48',
    emailLink: 'mailto:rostyslavkravchukDev@gmail.com',
    telegramLink: 'https://t.me/rostyslav_kravchuk',
  },
  {
    name: 'Nakonechnyi Andrii',
    imageSrc: AndriiImg,
    linkedinLink: 'https://www.linkedin.com/in/andrii-nakonechnyi-180005198/',
    githubLink: 'https://github.com/annak1104',
    emailLink: 'mailto:andriinakonechnyi.work@gmail.com',
    telegramLink: 'https://t.me/AndriiNakonechnyi11',
  },
  {
    name: 'Roik Viktoriia',
    imageSrc: ViktoriaImg,
    linkedinLink: 'https://www.linkedin.com/in/viktoriia-roik/',
    githubLink: 'https://github.com/viktoria-roik',
    emailLink: 'mailto:viktoriia.roik.dev@gmail.com',
    telegramLink: 'https://t.me/vroik',
  },
  {
    name: 'Serhiichuk Vitalii',
    imageSrc: VitaliiImg,
    linkedinLink: 'https://www.linkedin.com/in/vitalii-serhiichuk-3b29a8247/',
    githubLink: 'https://github.com/vserhiichuk',
    emailLink: 'mailto:vitalii.serhiichuk.dev@gmail.com',
    telegramLink: 'https://t.me/defing129',
  },
];

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
          {teamMembers.map(member => (
            <div className="team__card" key={member.name}>
              <div className="team__img-box">
                <img
                  className="team__person-img"
                  src={member.imageSrc}
                  alt={`TeamMate ${member.name}`}
                />
              </div>
              <div className="team__content-box">
                <div className="team__content-box__text">
                  <p className="team__person-name">{member.name}</p>
                  <p className="team__person-info">Full-Stack developer</p>
                </div>
                <div className="team__social-media social-media">
                  <Link
                    to={member.linkedinLink}
                    className="social-media__link"
                    target="_blank"
                  >
                    <LinkedInIcon className="social-media__icon" />
                  </Link>
                  <Link
                    to={member.githubLink}
                    className="social-media__link"
                    target="_blank"
                  >
                    <GithubIcon className="social-media__icon" />
                  </Link>
                  <Link
                    to={member.emailLink}
                    className="social-media__link"
                    target="_blank"
                  >
                    <EmailIcon className="social-media__icon" />
                  </Link>
                  <Link
                    to={member.telegramLink}
                    className="social-media__link"
                    target="_blank"
                  >
                    <TelegramIcon className="social-media__icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
