import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdBackspace from 'react-icons/lib/md/backspace';

const Wrapper = styled.div`
  display: flex;
  padding: 2px 5px 5px 8px;
  align-items: center;
  border: none;
  background: white;
`;

const Backspace = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.4em;
  padding: 0px 2px 0px 0px;
  color: ${props => props.theme.color.primary};
`;

const Input = styled.input.attrs({
  'disable-osk': 'true',
})`
  border-radius: 0px;
  background: transparent;
  font-size: 1.3em;
  outline: none;
  border: none;
  width: 100%;
`;
const Display = styled.div`
  flex-grow: 1;
`;

const DisplayWrapper = ({ value, displayRule, dateFormat, cancel }) => (
  <Wrapper>
    <Display>
      <Input value={displayRule(value, dateFormat)} readOnly autoFocus disable-osk="true" />
    </Display>
    <Backspace onClick={cancel}>
      <MdBackspace />
    </Backspace>
  </Wrapper>
);

DisplayWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  displayRule: PropTypes.func.isRequired,
  dateFormat: PropTypes.string,
  cancel: PropTypes.func,
};

DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: () => {},
};

export default DisplayWrapper;
