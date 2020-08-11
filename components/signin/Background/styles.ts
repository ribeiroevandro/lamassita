import styled from 'styled-components';
import { shade } from 'polished';

type PropTypeBg = {
  background: string;
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
`;

export const Background = styled.div.attrs((props: PropTypeBg) => ({
  background: props.background,
}))<PropTypeBg>`
  flex: 1;
  background: ${shade(0.3, '#A23521')} url(${(props) => props.background || ''}) center no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;
