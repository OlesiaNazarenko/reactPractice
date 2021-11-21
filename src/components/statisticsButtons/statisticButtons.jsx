import React from 'react';
import s from './StatisticButtons.module.css';
import styled from 'styled-components';
const DefaultButton = styled.button`
  border: none;
  font-size: 24px;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
const CostsButton = styled(DefaultButton)`
  background-color: pink;
`;
const IncomesButton = styled(DefaultButton)`
  background-color: green;
`;
const StatisticButtons = () => {
  return (
    <>
      <CostsButton className={s.btn} type="button">
        Все расходы
      </CostsButton>
      <IncomesButton className={s.btn} type="button">
        Все доходы
      </IncomesButton>
    </>
  );
};
export default StatisticButtons;
