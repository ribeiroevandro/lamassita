import React from 'react';

import BasicLayout from '../../layout/Basic';
import AnimationContainer from '../../components/signin/AnimationContainer';
import Background  from '../../components/signin/Background';
import ContainerPage from '../../components/signin/ContainerPage';

const signin = () => {
  return (
    <BasicLayout title="La massita - Backoffice">
      <ContainerPage>
        <AnimationContainer />
        <Background background="/icon_signin.png" />
      </ContainerPage>
    </BasicLayout>
  );
};

export default signin;
