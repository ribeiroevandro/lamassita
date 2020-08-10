import React from 'react';

import BasicLayout from '../../layout/Basic';
import AnimationContainer from '../../components/signin/AnimationContainer';

const signin = () => {
  return (
    <BasicLayout background="/icon_signin.png" title="La massita - Backoffice">
      <AnimationContainer />
    </BasicLayout>
  );
};

export default signin;
