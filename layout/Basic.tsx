import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import * as S from './styles';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fff;
    --primary: #A23521;
    --whatsapp: #1ebea5;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font: 400 14px sans-serif;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  input, button, textarea {
    font: 400 14px sans-serif;
  }
  button {
    cursor: pointer;
  }
`;

const BasicLayout = ({
  background,
  children,
  title,
}: {
  background?: string;
  children: any;
  title: string;
}) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <S.Content>{children}</S.Content>

        <S.Background background={background} />
      </S.Container>
    </>
  );
};

export default BasicLayout;
