import { ProductCatalog } from 'components/ProductsCatalog';
import { ProductCategories } from 'types/enumProductCategories';

export const TabletsPage: React.FC = () => {
  return (
    <ProductCatalog title="Tablets" category={ProductCategories.Tablets} />
  );
};
