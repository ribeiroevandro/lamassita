import React from 'react';

import * as S from './styles'

const ContainerPage = ({ children }: { children: any }) => {
  return (
    <S.Container>{children}</S.Container>
  );
};

export default ContainerPage;
