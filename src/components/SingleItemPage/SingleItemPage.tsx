import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const SingleItemPage: FC = () => {
  const { id } = useParams();

  return (
    <div>{id}</div>
  );
};
