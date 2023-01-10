import { FC } from 'react';
import classNames from 'classnames';
import './Message.scss';

type Props = {
  isActive: boolean;
};

export const Message: FC<Props> = ({ isActive }) => {
  return (
    <div
      className={classNames('message__wrapper', {
        'message__wrapper--is-active': isActive,
      })}
    >
      <div
        className={classNames('message__box', {
          'message__box--is-active': isActive,
        })}
      >
        <h2 className="message__title">The purchase was made successfully!</h2>
      </div>
    </div>
  );
};
