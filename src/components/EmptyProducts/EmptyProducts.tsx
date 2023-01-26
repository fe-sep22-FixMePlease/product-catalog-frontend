import { NoProduct } from './NoProduct';

import './EmptyProducts.scss';

export const EmptyProducts: React.FC = () => {
  return (
    <>
      <h1 className="page-not-found">Products on the way</h1>

      <div className="image-container">
        <NoProduct />
      </div>
    </>
  );
};
