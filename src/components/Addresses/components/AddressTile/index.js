import React from 'react';
import { toast } from 'react-toastify';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { Container, ButtonContainer } from '../../../ClientTile/styles';

import api from '../../../../services/api'

export default function AddressTile({ id, cep, city, state, onDelete, onEdit}) {
  
  
async function deleteAddress(){
  try{
    const httpResponse = await api.get('addresses/delete/'+id)
    
    const {data} = httpResponse
    
    if(data.status !== 200){
      toast.error(data.response)
    }else{
      toast.success('Endereço excluido!')
      onDelete()
    }

  }catch(er){
    toast.error('Falha de comunicação')
  }

}

  return (
    <Container>
      <p>{id}</p>
      <p>{cep}</p>
      <p>{city} / {state}</p>
      <ButtonContainer>
        <button className="edit" onClick={() => onEdit(id) }><MdModeEdit /></button>
        <button className="delete" onClick={deleteAddress} ><MdDeleteForever /> </button>
      </ButtonContainer>
    </Container>
  );
}
