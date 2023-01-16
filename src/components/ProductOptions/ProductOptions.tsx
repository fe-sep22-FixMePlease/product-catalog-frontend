// /* eslint-disable jsx-a11y/control-has-associated-label */
// import React, { FC } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import classnames from 'classnames';
// import './ProductOptions.scss';
// import { PhoneDataFromServer as Data } from '../../types/PhoneDataFromServer';

// interface Props {
//   product: Data;
// }

// export const ProductOptions: FC<Props> = ({ product }) => {
//   const {
//     id,
//     colorsAvailable,
//     color,
//     capacityAvailable,
//     capacity,
//     priceRegular,
//     priceDiscount,
//     screen,
//     ram,
//     resolution,
//     processor,
//   } = product;
//   const navigate = useNavigate();

//   const handleColorChange = (newColor: string) => {
//     const newId = id.replace(color, newColor);

//     navigate(`/phones/${newId}`);

//     window.location.reload();
//   };

//   const handleCapacityChange = (newCapacity: string) => {
//     const newid = id.replace(
//       capacity.toLocaleLowerCase(), newCapacity.toLocaleLowerCase(),
//     );

//     navigate(`/phones/${newid}`);
//     window.location.reload();
//   };

//   return (
//     <div className="ProductOptions">
//       <div className="color">
//         <div className="color__header">
//           <span className="color__header__text title">Available colors</span>
//           <span className="color__header__id">ID:802390</span>
//         </div>
//         <div className="color-options">
//           {colorsAvailable.map((colorOption) => (
//             <Link
//               to={`/phones/${id.replace(color, colorOption)}`}
//               onClick={() => handleColorChange(colorOption)}
//             >
//               <div
//                 className={classnames('colors-block__wrapper', {
//                   active: colorOption === color,
//                 })}
//                 key={colorOption}
//               >
//                 <div
//                   className={`colors-block__picker colors-block__picker-${colorOption}`}
//                 />
//               </div>
//             </Link>
//           ))}
//         </div>
//         <hr />
//         <div className="capacity">
//           <div className="capacity__header">
//             <span className="capacity__header__text title">
//               Select capacity
//             </span>
//           </div>
//           <div className="capacity__options">
//             {capacityAvailable.map((option) => (
//               <Link
//                 to={`/phones/${id.replace(capacity, option)}`}
//                 onClick={() => handleCapacityChange(option)}
//               >
//                 <div
//                   className={classnames('capacity__option', {
//                     active: capacity === option,
//                   })}
//                   key={option}
//                 >
//                   {option}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <hr />
//       </div>

//       <div className="price">
//         <span className="price__current">{priceRegular}</span>
//         <span className="price__full">{priceDiscount}</span>
//       </div>

//       <div className="specs">
//         <div className="spec-item">
//           <span className="spec-title">Screen</span>
//           <span className="spec-value">{screen}</span>
//         </div>

//         <div className="spec-item">
//           <span className="spec-title">Resolution</span>
//           <span className="spec-value">{resolution}</span>
//         </div>

//         <div className="spec-item">
//           <span className="spec-title">Processor</span>
//           <span className="spec-value">{processor}</span>
//         </div>

//         <div className="spec-item">
//           <span className="spec-title">Ram</span>
//           <span className="spec-value">{ram}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './ProductOptions.scss';
import { PhoneDataFromServer as Data } from '../../types/PhoneDataFromServer';

interface Props {
  product: Data;
}

export const ProductOptions: FC<Props> = ({ product }) => {
  const {
    id,
    colorsAvailable,
    color,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    screen,
    ram,
    resolution,
    processor,
  } = product;

  return (
    <div className="ProductOptions">
      <div className="color">
        <div className="color__header">
          <span className="color__header__text title">Available colors</span>
          <span className="color__header__id">ID:802390</span>
        </div>
        <div className="color-options">
          {colorsAvailable.map((colorOption) => (
            <Link
              to={`/phones/${id.replace(color, colorOption)}`}
            >
              <div
                className={classnames('colors-block__wrapper', {
                  active: colorOption === color,
                })}
                key={colorOption}
              >
                <div
                  className={`colors-block__picker colors-block__picker-${colorOption}`}
                />
              </div>
            </Link>
          ))}
        </div>
        <hr />
        <div className="capacity">
          <div className="capacity__header">
            <span className="capacity__header__text title">
              Select capacity
            </span>
          </div>
          <div className="capacity__options">
            {capacityAvailable.map((option) => (
              <Link
                to={`/phones/${id.replace(capacity.toLocaleLowerCase(), option.toLocaleLowerCase())}`}
              >
                <div
                  className={classnames('capacity__option', {
                    active: capacity === option,
                  })}
                  key={option}
                >
                  {option}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <hr />
      </div>

      <div className="price">
        <span className="price__current">{priceRegular}</span>
        <span className="price__full">{priceDiscount}</span>
      </div>

      <div className="specs">
        <div className="spec-item">
          <span className="spec-title">Screen</span>
          <span className="spec-value">{screen}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Resolution</span>
          <span className="spec-value">{resolution}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Processor</span>
          <span className="spec-value">{processor}</span>
        </div>

        <div className="spec-item">
          <span className="spec-title">Ram</span>
          <span className="spec-value">{ram}</span>
        </div>
      </div>
    </div>
  );
};
