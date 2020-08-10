import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  border: 2px solid #666360;
  padding: 0 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      svg {
        margin-right: 0;
      }
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #A23521;
      border-color: #A23521;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #A23521;
    `}
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #A23521;
    line-height: 4.3rem;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    width: 1.5em;
    height: 1.5em;
  }
`;

export const Erro = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }
`;
