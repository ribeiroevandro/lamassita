import React from 'react';

import * as S from './styles';

const Background = ({
  background,
}: {
  background?: string;
}) => {
  return (
    <S.Container>
      <S.Background background={background} />
    </S.Container>
  );
};

export default Background;
