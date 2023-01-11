import { Cross } from '../../images/icons/Cross';
import { Minus } from '../../images/icons/Minus';
import { Plus } from '../../images/icons/Plus';
import './CartProductItem.scss';

export const CartProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-item__info">
        <div className="product-item__cross">
          <Cross />
        </div>
        <div className="product-item__image-container">
          <img
            /* eslint-disable-next-line max-len */
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJQGrGoRJOlfxJtroHXe2f-91FlEZsQUncf3aWDXfr4wO1oLrpg2j5dOBToubmJMGod52p9_PZ2XTD8UGNL1SajKEWYt37A1ei9Wa8C6xDm1r_j3hDesI5&usqp=CAc"
            alt="ProductItemImage"
            className="product-item__image"
          />
        </div>
        <div className="product-item__title">
          {`${'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)'}`}
        </div>
      </div>

      <div className="product-item__bottom-container">
        <div className="product-item__counter">
          <div className="product-item__minus">
            <Minus />
          </div>
          <div className="product-item__amount">1</div>
          <div className="product-item__plus">
            <Plus />
          </div>
        </div>
        <div className="product-item__price">{`$${1099}`}</div>
      </div>
    </div>
  );
};
