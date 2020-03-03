import React, {useState, useEffect, useRef} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify'
import api from '../../services/api'
import { useParams } from 'react-router-dom';

import InputMask from '../../components/InputMask';
import DatePicker from '../../components/DatePicker';

import { clearMask } from '../../utils';

import { 
  Main, 
  Container,
} from '../mainStyles';

import { FormContainer, Row, Group } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é orbigatório'),
  birth_date: Yup.date().typeError('Formato inválido').required('A data de nascimento é obrigatória').default(function() {
    return format(parseISO(new Date().toISOString()), 'dd/MM/yyyy');
  }).typeError('Formato inválido'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  rg: Yup.string().required('O RG é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é orbigatório'),
  phone: Yup.string().nullable(true)  
})

export default function Client() {

  const [client, setClient] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadClient(){
      const httpresponse = await api.get('clients/find/'+id);

      const {response} = httpresponse.data
      console.tron.warn(response)
      setClient(response)
    }

    if(id !== null){
      loadClient()
    }
      
    
  }, [id])

  async function handleSubmit({name, birth_date, cpf, rg, email, phone}){
    cpf = clearMask(cpf)
    rg = clearMask(rg)
    phone = phone && clearMask(phone)
    birth_date = parseISO(new Date(birth_date).toISOString())
    try {
      let endpoint = 'clients/insert'
      if(client.id !== null){
        endpoint = 'clients/ipdate/'+client.id
      }

      const httpResponse = await api.post(endpoint,{
        name, birth_date, cpf, rg, email, phone
      })
  
      const {data} = httpResponse
  
      if(data.status !== 200){
        toast.error(data.response)
      } else {
        toast.success('Cliente cadastrado com sucesso')
      } 
    } catch (error) {
      toast.error('Falha de comunicação');
    }

  }
  return (
    <Main>
      <Container>
        <h1> Cadastro de Clientes </h1>

        <FormContainer>
          <Form initialData={client} schema={schema} onSubmit={handleSubmit}>
            <Row>
              <Group>
                <p>Nome*:</p>
                <Input name="name" placeholder="Nome" />
              </Group>
              <Group>
                <p>Data de Nascimento*:</p>
                <DatePicker showPopperArrow={false} name="birth_date"  placeholder="__/___/____"/>
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
