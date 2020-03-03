import React, {useState, useEffect} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify'
import api from '../../services/api'
import { useParams } from 'react-router-dom';

import InputMask from '../../components/InputMask';
import DatePicker from '../../components/DatePicker';
import Addresses from '../../components/Addresses';
import history from '../../services/history';

import { clearMask, validarCPF } from '../../utils';

import { 
  Main, 
  Container,
  FormContainer, Row, Group
} from '../mainStyles';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é orbigatório'),
  birth_date: Yup.date().typeError('Formato inválido').required('A data de nascimento é obrigatória').default(function() {
    return format(parseISO(new Date().toISOString()), 'dd/MM/yyyy');
  }).typeError('Formato inválido'),
  cpf: Yup.string().required('O CPF é obrigatório')
    .test('cpf_validate', 'CPF inválido', (v) => {
      return validarCPF(v); 
    }
  ),
  rg: Yup.string().required('O RG é obrigatório'),
  phone: Yup.string().nullable(true)  
})

export default function Client() {

  const [client, setClient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadClient(){
      const httpresponse = await api.get('clients/find/'+id);

      let {response} = httpresponse.data
      
      response.birth_date = new Date(response.birth_date)

      setClient(response)
    }
    if(id){
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
      let message = 'Cliente cadastrado com sucesso'
      if(client.id){
        endpoint = 'clients/update/'+client.id
        message = 'Cliente alterado com sucesso'
      }

      const httpResponse = await api.post(endpoint,{
        name, birth_date, cpf, rg, email, phone
      })
  
      const {data} = httpResponse
  
      if(data.status !== 200){
        toast.error(data.response)
      } else {
        toast.success(message)
        history.push('/client/'+data.response.id)
      } 
    } catch (er) {
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
                <p>Telefone:</p>
                <InputMask name="phone" mask="(99) 99999-9999" placeholder="__ _____-____"/>    
              </Group>
              <Group>
                <button type="submit" className="btn-submit">
                  {client.id ? 'Alterar' : 'Cadastrar'}
                </button>
              </Group>
            </Row>
           
          </Form>
        </FormContainer>
        <hr />
        {
          client.id 
          ? <Addresses idClient={client.id}/> 
          : null
        }
      </Container>
    </Main>
  );
}
