import React, {useState, useEffect} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FormContainer, Row, Group } from '../../../../pages/mainStyles';
import axios from 'axios'
import { toast } from 'react-toastify'
import api from '../../../../services/api'

const schema = Yup.object().shape({
  cep: Yup.string().required('O CEP é orbigatório'), 
  street: Yup.string().required('O nome da rua é orbigatório'), 
  district: Yup.string().required('O Bairro é orbigatório'), 
  city: Yup.string().required('A Cidade é orbigatória'), 
  state: Yup.string().required('O Estado é orbigatório'), 
})

export default function AddressForm({idClient, idAddress ,callback}) {
  const [cep, setCep] = useState({});
  const [address, setAddress] = useState({});

  useEffect(()=> {
    async function buscaCep(){  
      const endpoint = 'http://viacep.com.br/ws/'+cep+'/json/'
      const httpResponse = await axios.get(endpoint);
  
      if(httpResponse.status !== 200){
        toast.error('Erro ao buscar CEP')
      }else{
        const {data} = httpResponse

        if(data.erro){
          toast.error('CEP inválido')
        }else{
          setAddress({
            street: data.logradouro,
            complement: data.complemento,
            district: data.bairro,
            city: data.localidade,
            state:  data.uf
          })
        }
      }
    }
    if(cep.length >= 8){
      buscaCep()
    }
  }, [cep])

  function handleCep(e){
    setCep(e.target.value)
  }

  async function handleSubmit({cep, street, number, complement, district, city, state}){
    let endpoint = 'addresses/insert/'+idClient
    if(idAddress){
      endpoint = 'addresses/update/'+idAddress
    }
    
    const httpResponse = await api.post(endpoint, {
      cep, street, number, complement, district, city, state
    });

    if(httpResponse.status !== 200){
      toast.error(httpResponse.data)
    }else{
      callback()
    }
  }

  useEffect(() => {
    async function findAddress(){
      const httpResponse = await api.get('addresses/find/'+idAddress)

      const { data } = httpResponse;

      if(data.status !== 200){
        toast.error(data.response)
      }else{
        setAddress(data.response)
      }
    }
    if(idAddress){
      findAddress()
    }
  }, [idAddress])
  
  return (
    <FormContainer>
      <Form schema={schema} initialData={address} onSubmit={handleSubmit}>
        <Row>
          <Group>
            <p>CEP*:</p>
            <Input maxLength='8' onChange={handleCep} name="cep" />
          </Group>
          <Group>
            <p>Logradouro:</p>
            <Input readOnly className='readonly' name="street" />
          </Group>
        </Row>
        <Row>
          <Group>
            <p>Numero*:</p>
            <Input name="number" />
          </Group>  
          <Group>
            <p>Complemento:</p>
            <Input name="complement" />
          </Group>
        </Row>
        <Row>
          <Group>
            <p>Bairro*:</p>
            <Input readOnly className='readonly' name="district" />
          </Group>
          <Group>
            <p>Cidade*:</p>
            <Input readOnly className='readonly' name="city" />
          </Group>
        </Row>
        <Row>
          <Group>
            <p>Estado:</p>
            <Input readOnly className='readonly' name="state" />
          </Group>
          <Group>
            <button type="submit" className="btn-submit">
              Salvar
            </button>
          </Group>
        </Row>
      </Form>
    </FormContainer>
  );
}