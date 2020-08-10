import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../shared/Input';
import Button from '../../shared/Button';

import * as S from './styles';

export default function AnimationContainer() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {}, []);

  return (
    <S.AnimationContainer>
      <img src="/logo_admin.png" alt="DevSpace - Backoffice" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
    </S.AnimationContainer>
  );
}
