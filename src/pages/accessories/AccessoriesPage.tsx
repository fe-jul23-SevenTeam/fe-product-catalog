import { ProductCatalog } from 'components/ProductsCatalog';
import { ProductCategories } from 'types/enumProductCategories';

export const AccessoriesPage: React.FC = () => {
  return (
    <ProductCatalog
      title="Accessories"
      category={ProductCategories.Accessories}
    />
  );
};
