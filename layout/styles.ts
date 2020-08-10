import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

type PropTypeBg = {
  background: string;
};

export const Background = styled.div.attrs((props: PropTypeBg) => ({
  background: props.background,
}))<PropTypeBg>`
  flex: 1;
  background-size: cover;
  background-color: ${shade(0.3, '#A23521')};
  background-image: url(${(props) => props.background || ''});
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 545px;
    max-height: 545px;
  }
`;
