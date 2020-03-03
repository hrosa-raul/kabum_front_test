import React from 'react';
import {Link} from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { Container, ButtonContainer } from './styles';

export default function ClientTile({id, name, email}) {
  
  function deleteClient(){
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
