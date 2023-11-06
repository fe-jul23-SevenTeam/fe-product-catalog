import { ProductCatalog } from 'components/ProductsCatalog';
import { ProductCategories } from 'types/enumProductCategories';

export const PhonesPage: React.FC = () => {
  return (
    <ProductCatalog title="Mobile phones" category={ProductCategories.Phones} />
  );
};
