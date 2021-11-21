import React from 'react';
import styled from 'styled-components';
// import s from './StatisticButtons.module.css'
import PropTypes from 'prop-types';
const InputS = styled.input`
  border: none;
  border-bottom: 1px solid;
  background: transparent;
`;
const Label = styled.label`
  border: none;
  border-bottom: 1px solid;
  background: transparent;
`;
const LabelInput = ({ title, type = 'text', placeholder = null, name }) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <InputS type={type} name={name} placeholder={placeholder} />
    </label>
  );
};

LabelInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default LabelInput;
