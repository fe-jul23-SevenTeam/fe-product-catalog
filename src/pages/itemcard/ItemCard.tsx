import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../Types/ProductDetails';

import { ReactComponent as HomeIcon } from '../../assets/icons/home_icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right_icon.svg';

import './ItemCard.scss';
import { getProductInfoById } from '../../api/productsGeneral';

import { BackButton } from '../../components/BackButton/BackButton';
import { PhonePhotos } from '../../components/PhoneDetails/PhonePhotos';
import { PhoneActions } from '../../components/PhoneDetails/PhoneActions';

export const ItemCard: React.FC = () => {
  const [productInfo, setProductInfo] = useState<ProductDetails>();
  const [selectedImage, setSelectedImage] = useState<string | null>();

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

  // const { itemId } = useParams();
  const itemId = 'apple-ipad-pro-11-2021-256gb-spacegray';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (itemId) {
          const productFromServer = await getProductInfoById(itemId);
          setProductInfo(productFromServer);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching phone:', error);
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
    <div className="phone">
      <div className="breadcrumbs">
        <Link className="breadcrumbs__home" to="/">
          <HomeIcon />
        </Link>

        <ArrowRightIcon className="breadcrumbs__arrow" />

        <Link className="breadcrumbs__category" to={productInfo.category}>
          {productInfo.category}
        </Link>

        <ArrowRightIcon className="breadcrumbs__arrow" />
        <p>{productInfo.name}</p>
      </div>

      <BackButton />

      <h1 className="phone__title">{productInfo.name}</h1>

      <div className="phone__container">
        <div className="phone__details">
          <PhonePhotos
            productName={productInfo.name}
            images={productInfo.images}
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
          />
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

        <div className="phone__description description">
          <div className="phone__about about">
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

          <div className="phone__tech-specs tech-specs">
            <h2 className="description__title">Tech specs</h2>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Screen</div>
              <div className="categ__value">{productInfo.screen}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Resolution</div>
              <div className="categ__value">{productInfo.resolution}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Processor</div>
              <div className="categ__value">{productInfo.processor}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">RAM</div>
              <div className="categ__value">{productInfo.ram}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Built in memory</div>
              <div className="categ__value">{productInfo.capacity}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Camera</div>
              <div className="categ__value">{productInfo.camera}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Zoom</div>
              <div className="categ__value">{productInfo.zoom}</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Cell</div>
              <div className="categ__value">{productInfo.cell}</div>
            </div>
          </div>
        </div>

        {/* блок з рекомендаціями */}
        <div className="phone__recommended">
          <h1>You may also like</h1>
        </div>
      </div>
    </div>
  );
};
