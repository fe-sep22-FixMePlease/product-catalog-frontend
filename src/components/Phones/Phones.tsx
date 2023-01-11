import React, { useEffect, useState } from 'react';
import './Phones.scss';
import '../../styles/blocks/grid.scss';
import { getAllProducts, getSortedProducts } from '../../api/phones';
import { Pagination } from '../Pagination';
import { Dropdown } from '../Dropdowns';
import { CardItem } from '../CardItem';
import { Loader } from '../Loader';
import { Phone } from '../../types/Phone';

export const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [totalPhones, setTotalPhones] = useState(0);
  const [sortBy, setSortBy] = useState('Newest');
  const [perPage, setPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const sortByOptions = ['newest', 'alphabetically', 'cheapest'];
  const perPageOptions = [8, 16, 32, 64];

  const loadPhones = async () => {
    setIsLoading(true);

    try {
      const sortedFromServer = await getSortedProducts(
        'phones',
        sortBy,
        currentPage,
        perPage,
      );

      const allFromServer = await getAllProducts();

      setPhones(sortedFromServer);
      setTotalPhones(allFromServer.length);
      setIsLoading(false);
    } catch (error) {
      throw new Error('error');
    }
  };

  const handleSortBy = (value: string) => {
    setSortBy(value);
  };

  const handlePerPage = (value: number) => {
    setPerPage(value);
    setCurrentPage(1);
  };

  const handleCurPage = (numberOfPage: number) => {
    setCurrentPage(numberOfPage);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(page => page - 1);
    }
  };

  const handleNextPage = (lastPage: number) => {
    if (currentPage !== lastPage) {
      setCurrentPage(page => page + 1);
    }
  };

  useEffect(() => {
    loadPhones();
  }, [currentPage, perPage, sortBy]);

  return (
    <div className="phones container">
      <h1 className="phones__title">
        Mobile phones
      </h1>

      <span className="phones__items-amount">
        {`${totalPhones} models`}
      </span>

      <div className="phones__selects">
        <div className="grid">
          <div className="
            grid__item--mobile-1-2
            grid__item--tablet-1-4
            grid__item--desktop-1-4
          "
          >
            <Dropdown
              title="Sort by"
              field={sortBy}
              options={sortByOptions}
              onSelect={handleSortBy}
            />
          </div>

          <div className="
            grid__item--mobile-3-4
            grid__item--tablet-5-7
            grid__item--desktop-5-7
          "
          >
            <Dropdown
              title="Items on page"
              field={perPage}
              options={perPageOptions}
              onSelect={handlePerPage}
            />
          </div>
        </div>
      </div>

      {isLoading
        ? (
          <div className="phones__loader">
            <Loader />
          </div>
        )
        : (
          <ul className="phones__catalog grid">
            {phones.map(phone => (
              <li key={phone.id} className="phones__item">
                <CardItem phone={phone} phones={phones} />
              </li>
            ))}
          </ul>
        )}

      <Pagination
        total={totalPhones}
        perPage={perPage}
        currentPage={currentPage}
        onCurPage={handleCurPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};
