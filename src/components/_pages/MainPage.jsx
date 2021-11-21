import React from 'react';
import PropTypes from 'prop-types';
import MainInfo from './MainInfo';
import {
  costInfoOtions,
  incomeInfoOtions,
  balanceInfoOtions,
} from '../../assets/options/mainInfoOptions.json';
import StatisticButtons from '../statisticsButtons/statisticButtons';
import SolidTitle from 'components/Titles/SolidTitle';

const MainPage = ({ openActivePage }) => {
  return (
    <>
      {/* <h1>Журнал расходов</h1> */}
      <SolidTitle text="Журнал расходов" />
      <MainInfo
        activePage="costs"
        openActivePage={openActivePage}
        options={costInfoOtions}
        title="Расходы"
      />
      <MainInfo
        activePage="incomes"
        openActivePage={openActivePage}
        options={incomeInfoOtions}
        title="Доходы"
      />
      <MainInfo
        activePage="balance"
        openActivePage={openActivePage}
        options={balanceInfoOtions}
        title="Баланс"
      />
      <StatisticButtons />
    </>
  );
};
MainPage.propTypes = {
  openActivePage: PropTypes.func.isRequired,
};

export default MainPage;
