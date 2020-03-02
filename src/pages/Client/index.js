import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import InputMask from '../../components/InputMask';
import DatePicker from '../../components/DatePicker';
import * as Yup from 'yup';
import { parseISO, format } from 'date-fns';

import { clearMask } from '../../utils';

import { 
  Main, 
  Container,
} from '../mainStyles';

import { FormContainer, Row, Group } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é orbigatório'),
  birth_date: Yup.date().required('A data de nascimento é obrigatória'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  rg: Yup.string().required('O RG é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é orbigatório'),
  phone: Yup.string().nullable(true)
  
})

export default function Client() {

  function handleSubmit({name, birth_date, cpf, rg, email, phone}){
    cpf = clearMask(cpf)
    rg = clearMask(rg)
    phone = phone && clearMask(phone)
    birth_date = parseISO(new Date(birth_date).toISOString())
    console.tron.warn(format(birth_date, 'dd/MM/yyyy'))
  }
  return (
    <Main>
      <Container>
        <h1> Cadastro de Clientes </h1>

        <FormContainer>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Row>
              <Group>
                <p>Nome*:</p>
                <Input name="name" placeholder="Nome"/>
              </Group>
              <Group>
                <p>Data de Nascimento*:</p>
                <DatePicker showPopperArrow={false} name="birth_date" placeholder="__/___/____"/>
              </Group>
            </Row>
            <Row>
              <Group>
                <p>CPF*:</p>
                <InputMask name="cpf" mask="999.999.999-99" placeholder="___.___.___-__"/>
              </Group>
              <Group>
                <p>RG*:</p>
                <InputMask name="rg" mask="99.999.999-9" placeholder="__.___.___-_"/>
              </Group>
            </Row>
            <Row>
              <Group>
                <p>E-mail*:</p>
                <Input name="email" placeholder="Digite seu e-mail"/>
              </Group>
              <Group>
                <p>Telefone:</p>
                <InputMask name="phone" mask="(99) 99999-9999" placeholder="__ _____-____"/>    
              </Group>
            </Row>
            <button type="submit" className="btn-submit">Cadastrar</button>
          </Form>
        </FormContainer>
        
      </Container>
    </Main>
  );
}
