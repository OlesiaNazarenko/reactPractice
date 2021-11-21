import PropTypes from 'prop-types';
import styled from 'styled-components';
import LabelInput from 'components/_shared/LabelInput/LabelInput';
import GoBackHeader from 'components/_shared/GoBackHeader/GobackHeader';
const Form = styled.form`
  border: 1px solid;
  padding: 10px;
`;
const TransactionPage = ({ transTypes, closeActivePage }) => {
  const title = transTypes === 'incomes' ? 'Доходы' : 'Расходы';
  return (
    <>
      <GoBackHeader title={title} handleGoBack={closeActivePage} />
      <main>
        <section>
          <Form action="">
            <LabelInput title={'День'} type="date" name="date" />
            <LabelInput title={'Время'} type="time" name="time" />
            <LabelInput title={'Категория'} type="button" name="category" />
            <LabelInput
              title={'Сумма'}
              name="sum"
              placeholder="Введите сумму"
            />
            <LabelInput title={'Валюта'} name="button" name="curency" />
            <LabelInput name="comment" placeholder="Введите комментарий" />
          </Form>
        </section>
      </main>
    </>
  );
};

TransactionPage.propTypes = {
  transTypes: PropTypes.string.isRequired,
  closeActivePage: PropTypes.func.isRequired,
};
export default TransactionPage;
