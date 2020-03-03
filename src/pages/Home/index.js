import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import ClientTile from '../../components/ClientTile';

import {
  Main, 
  Container,
} from '../mainStyles'

import { 
  CenterInfo,
  ButtonContainer,
  WrapperList
} from './styles';

export default function Home() {

  const [clients, setClients] = useState([]);
  
  async function loadClients(){
    const httpresponse = await api.get('clients');

    const {response} = httpresponse.data
    console.tron.warn(response)
    setClients(response)
  }

  useEffect(() => {
    loadClients()
  }, [])

  return (
    <Main>
      <Container>
        <h1>Cadastro de Clientes</h1>
        <WrapperList>
          {clients.length > 0 ? 
            clients.map(client => 
              <ClientTile
                id={client.id}  
                name={client.name}
                onDelete={loadClients}
                key={client.id}
              />
            )
          : 
            <CenterInfo>
              <h2> Você ainda não cadastrou nenhum cliente </h2>
            </CenterInfo>
          }  
        </WrapperList>
                  
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
