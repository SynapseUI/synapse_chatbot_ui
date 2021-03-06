import React from 'react';
import styled from 'styled-components';

import { DownArrow } from '../styles/Dropdown.styles';
import Colors from '../../../colors';

const StyledDropdownHead = styled.div`
  width: inherit;
  height: 40px;
  padding: 8px;

  background-color: transparent;
  border-bottom: 1px solid ${Colors.MEDIUM_GRAY};

  box-sizing: border-box;

  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownHead = (props) => {
  const {
    style,
    onClick,
    children
  } = props;

  return (
    <StyledDropdownHead
      style={style}
      onClick={onClick}
    >
      {children}
      <DownArrow />
    </StyledDropdownHead>
  );
}

export default DropdownHead;
