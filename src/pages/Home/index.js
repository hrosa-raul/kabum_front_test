import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  Main, 
  Container,
} from '../mainStyles'

import { 
  CenterInfo,
  ButtonContainer
} from './styles';

export default function Home() {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients(){
      const httpresponse = await api.get('clients');

      const {response} = httpresponse.data

      setClients(response)
    }

    loadClients()
  }, [])

  return (
    <Main>
      <Container>
        <h1>Cadastro de Clientes</h1>
        {clients.length > 0 ? 
          <p>Opa</p>
        : 
        <CenterInfo>
          <h2> Você ainda não cadastrou nenhum cliente </h2>
        </CenterInfo>
        }
        <ButtonContainer>
          <Link to="/client"> 
            <button>
              Cadastrar Novo Cliente 
            </button>
          </Link>
        </ButtonContainer>
      </Container>
    </Main>
  );
}
