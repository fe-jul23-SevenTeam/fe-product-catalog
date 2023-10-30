import './PhonePhotos.scss';

export const PhonePhotos: React.FC = () => {
  return (
    // дістати фото зі серверу, зробити функціонал вибору
    <div className="photos">
      <img
        className="photo--big"
        src={require('../../../assets/img/image2.png')}
        alt="photo"
      />

      <div className="photos--small">
        <img
          className="photo--small"
          src={require('../../../assets/img/image8-1.png')}
        />
        <img
          className="photo--small"
          src={require('../../../assets/img/image8-1.png')}
        />
        <img
          className="photo--small"
          src={require('../../../assets/img/image8-1.png')}
        />
        <img
          className="photo--small"
          src={require('../../../assets/img/image8-1.png')}
        />
        <img
          className="photo--small"
          src={require('../../../assets/img/image8-1.png')}
        />
      </div>
    </div>
  );
};
