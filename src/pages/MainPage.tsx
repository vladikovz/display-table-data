import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import Api from '../api';
import TableView from '../components/tableView/TableView';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from './MainPage.module.css';
import { filterCharityFinancial } from '../store/actions/charityFinancialActions';
import SliderRange from '../components/sliderRange/SliderRange';
import Spinner from '../components/spinner/Spinner';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { filteredCharityFinancials, maxRevenueLength } = useTypedSelector(
    (store) => store.charityFinancial,
  );

  const fetchData = async () => {
    setIsLoading(true);
    await dispatch(Api.charityFinancials.getCharityFinancials());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterRangeChange = (value: number[]) => {
    dispatch(filterCharityFinancial(value));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <SliderRange
        maxRange={maxRevenueLength}
        onChange={handleFilterRangeChange}
        title={'Revenue range'}
      />
      <TableView data={filteredCharityFinancials} />
    </div>
  );
};

export default MainPage;
