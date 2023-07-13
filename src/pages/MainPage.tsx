import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import Api from '../api';
import TableView from '../components/tableView/TableView';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from './MainPage.module.css';
import { filterCharityFinancial } from '../store/actions/charityFinancialActions';
import SliderRange from '../components/sliderRange/SliderRange';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const { filteredCharityFinancials, maxRevenueLength } = useTypedSelector(
    (store) => store.charityFinancial,
  );

  const fetchData = async () => {
    await dispatch(Api.charityFinancials.getCharityFinancials());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterRangeChange = (value: number[]) => {
    dispatch(filterCharityFinancial(value));
  };

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
