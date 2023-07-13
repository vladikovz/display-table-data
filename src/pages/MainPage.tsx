import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import Api from '../api';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const fetch = async () => {
    await dispatch(Api.charityFinancials.getCharityFinancials());
  };

  useEffect(() => {
    fetch();
  }, []);

  return <div></div>;
};

export default MainPage;
