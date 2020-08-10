import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';



import BasicLayout from '../../layout/Basic';
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles'

const signin = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {}, [])

  return (
    <BasicLayout title="La massita - Backoffice">
      <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <img src="/logo_admin.png" alt="DevSpace - Backoffice" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
          </Form>
        </S.AnimationContainer>
      </S.Content>

      <S.Background>
        <img src="/icon_signin.png" alt="La massita - Backoffice" />
      </S.Background>
    </S.Container>
    </BasicLayout>
  );
}

export default signin;