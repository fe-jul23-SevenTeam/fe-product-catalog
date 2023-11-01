import classNames from 'classnames';
import './PhonePhotos.scss';

interface Props {
  images: string[];
  setSelectedImage: (url: string) => void;
  selectedImage: string | null | undefined;
  productName: string | undefined;
}

export const PhonePhotos: React.FC<Props> = ({
  setSelectedImage,
  selectedImage,
  images,
  productName,
}) => (
  <div className="photos">
    <img
      className="photo--big"
      src={selectedImage ? `${selectedImage}` : `${images?.[0]}`}
      alt={`${productName} photo`}
    />

    <div className="photos--small">
      {images?.map(image => (
        <img
          key={image}
          className={classNames('photo--small', {
            active: selectedImage === image,
          })}
          src={`${image}`}
          onClick={() => setSelectedImage(image)}
          alt={`${productName} photo`}
        />
      ))}
    </div>
  </div>
);
