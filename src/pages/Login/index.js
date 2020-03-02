import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Main, Container } from './styles';

import { signInRequest } from '../../store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido')
    .required('O e-mail é orbigatório'),
  password: Yup.string().required('O campo senha é obrigatório')
})

export default function Login() {
  const dispatch = useDispatch()

  function handleSubmit({email, password}){
    dispatch(signInRequest(email, password))
  }
  
  return (
    <Main>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Digite seu e-mail"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
        
          <button type="submit">Acessar</button>
        </Form>
      </Container>
    </Main>
  );
}
