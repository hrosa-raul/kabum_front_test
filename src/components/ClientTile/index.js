import React from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { Container, ButtonContainer } from './styles';

import api from '../../services/api'

export default function ClientTile({id, name, onDelete}) {
  
  async function deleteClient(){
    try{
      const httpResponse = await api.get('clients/delete/'+id)
      
      const {data} = httpResponse
      
      if(data.status !== 200){
        toast.error(data.response)
      }else{
        toast.success('Cliente excluido!')
        onDelete()
      }

    }catch(er){
      toast.error('Falha de comunicação')
    }
    
    console.tron.warn(id)
  }
  
  return (
    <Container>
      <p>{id}</p>
      <p>{name}</p>
      <ButtonContainer>
        <Link to={'/client/'+id}> 
          <button className="edit">
            <MdModeEdit />
          </button>
        </Link>
        
        <button className="delete" onClick={deleteClient}><MdDeleteForever /> </button>
      </ButtonContainer>
    </Container>
  );
}
