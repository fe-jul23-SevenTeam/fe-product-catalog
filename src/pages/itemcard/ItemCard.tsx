import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductDetails } from '../../types/ProductDetails';

import { ReactComponent as HomeIcon } from '../../assets/icons/home_icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right_icon.svg';
import { ReactComponent as PhoneLoader } from '../../assets/iphone-icon.svg';

import './ItemCard.scss';
import { getProductInfoById } from '../../api/productsGeneral';

import { BackButton } from '../../components/BackButton/BackButton';
import { PhonePhotos } from '../../components/PhoneDetails/PhonePhotos';
import { PhoneActions } from '../../components/PhoneDetails/PhoneActions';
import { LikeSlider } from './ui/LikeSlider';

export const ItemCard: React.FC = () => {
  const [productInfo, setProductInfo] = useState<ProductDetails>();
  const [selectedImage, setSelectedImage] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);

  const [phoneIdsInCart, setPhoneIdsInCart] = useState<number[]>(() => {
    const storedIds = localStorage.getItem('phoneIdsInCart10');

    return storedIds ? JSON.parse(storedIds) : [];
  });

  const [phoneIdsInFavourites, setPhoneIdsInFavourites] = useState<number[]>(
    () => {
      const storedIds = localStorage.getItem('phoneIdsInFavourites');

      return storedIds ? JSON.parse(storedIds) : [];
    },
  );

  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        if (itemId) {
          const productFromServer = await getProductInfoById(itemId);
          setProductInfo(productFromServer);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching prod:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (!productInfo) {
    return null;
  }

  const handleAddToCart = (id: number) => {
    setPhoneIdsInCart(prevIds => [...prevIds, id]);
  };

  const handleRemoveFromCart = (id: number) => {
    const filter = phoneIdsInCart.filter(phoneId => phoneId !== id);

    setPhoneIdsInCart(filter);
  };

  const handleAddToFavourites = (id: number) => {
    setPhoneIdsInFavourites(prevIds => [...prevIds, id]);
  };

  const handleRemoveFromFavourite = (id: number) => {
    const filter = phoneIdsInFavourites.filter(phoneId => phoneId !== id);

    setPhoneIdsInFavourites(filter);
  };

  return (
    <div className="prod">
      <div className="breadcrumbs">
        <Link className="breadcrumbs__home" to="/">
          <HomeIcon />
        </Link>

        <div className="breadcrumbs__arrow">
          <ArrowRightIcon />
        </div>

        <Link className="breadcrumbs__category" to={`/${productInfo.category}`}>
          {productInfo.category}
        </Link>

        <div className="breadcrumbs__arrow">
          <ArrowRightIcon />
        </div>
        <p className="breadcrumbs__name">{productInfo.name}</p>
      </div>

      <BackButton />

      <h1 className="prod__title">{productInfo.name}</h1>

      <div className="prod__container">
        <div className="prod__details">
          {isLoading ? (
            <div className="prod__loader">
              <PhoneLoader className="prod__loader-icon" />
            </div>
          ) : (
            <>
              <PhonePhotos
                productName={productInfo.name}
                images={productInfo.images}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
              />
            </>
          )}

          <PhoneActions
            product={productInfo}
            productId={itemId}
            colorsAvailable={productInfo.colorsAvailable}
            capacityAvailable={productInfo.capacityAvailable}
            phoneIdInCart={phoneIdsInCart}
            phoneIdInFavourites={phoneIdsInFavourites}
            handleRemoveFromCart={handleRemoveFromCart}
            handleAddToCart={handleAddToCart}
            handleRemoveFromFavourites={handleRemoveFromFavourite}
            handleAddToFavourites={handleAddToFavourites}
            setSelectedImage={setSelectedImage}
          />
        </div>

        <div className="prod__description description">
          <div className="prod__about about">
            <h2 className="description__title">About</h2>

            {productInfo.description.map(desc => (
              <>
                <div className="about__info" key={desc.title}>
                  <h3 className="about__subtitle">{desc.title}</h3>
                  {desc.text.map(p => (
                    <p className="about__text" key={p}>
                      {p}
                    </p>
                  ))}
                </div>
              </>
            ))}
          </div>

          <div className="prod__tech-specs tech-specs">
            <h2 className="description__title">Tech specs</h2>

            {productInfo.screen && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Screen</h4>
                <span className="categ__value">{productInfo.screen}</span>
              </div>
            )}

            {productInfo.resolution && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Resolution</h4>
                <span className="categ__value">{productInfo.resolution}</span>
              </div>
            )}

            {productInfo.processor && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Processor</h4>
                <span className="categ__value">{productInfo.processor}</span>
              </div>
            )}

            {productInfo.ram && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">RAM</h4>
                <span className="categ__value">{productInfo.ram}</span>
              </div>
            )}

            {productInfo.capacity && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Built in memory</h4>
                <span className="categ__value">{productInfo.capacity}</span>
              </div>
            )}

            {productInfo.camera && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Camera</h4>
                <span className="categ__value">{productInfo.camera}</span>
              </div>
            )}

            {productInfo.zoom && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Zoom</h4>
                <span className="categ__value">{productInfo.zoom}</span>
              </div>
            )}

            {productInfo.cell && (
              <div className="tech-specs__categ categ">
                <h4 className="categ__title">Cell</h4>
                <span className="categ__value">
                  {productInfo.cell.join(', ')}
                </span>
              </div>
            )}
          </div>
        </div>

        <LikeSlider />
      </div>
    </div>
  );
};
