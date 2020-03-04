import React,  {useState, useEffect}  from 'react';
import { toast } from 'react-toastify';

import AddressTile from './components/AddressTile';
import AddressForm from './components/AddressForm';

import { Container, InfoWrapper, LineHead, DataContainer} from './styles';

import api from '../../services/api';

const formStatus = {
  IDDLE: 'iddle',
  NEW: 'new',
  EDIT: 'edit'
}

export default function Addresses({idClient}) {

  const [formState, setFormState] = useState(formStatus.IDDLE)
  const [addresses, setAddresses] = useState([]);
  const [idAddress, setIdAddress] = useState(null);
  
  async function loadAddresses(id){
    const httpResponse = await api.get('addresses/all/'+id);

    const {data} = httpResponse;

    if(data.status !== 200){
      toast.error(data.response)
    }else{
      setAddresses(data.response)
      setFormState(formStatus.IDDLE)
    } 
  }

  useEffect(() => {
    loadAddresses(idClient)
  }, [idClient]); 
  
  function back(){
    setIdAddress(null)
    loadAddresses(idClient)
  }

  function openNewForm(){
    setIdAddress(null)
    setFormState(formStatus.NEW);
  }

  function openEditForm(id){
    setIdAddress(id)
    setFormState(formStatus.EDIT);
  }

  return (
    <Container>
      <LineHead>
        <h2>Endereços</h2>
        {
          formState === formStatus.IDDLE 
          ? <button 
              onClick={openNewForm}
            > 
              Novo Endereço
            </button>
          : <button 
              onClick={back}
            > 
              Voltar
            </button>
        }        
      </LineHead>
      <DataContainer>
        {
          formState === formStatus.IDDLE 
          ? 
            addresses.length > 0 
              ? addresses.map(address => 
                <AddressTile
                  key={address.id}
                  id={address.id}
                  cep={address.cep}
                  city={address.city}
                  state={address.state}
                  onDelete={back }
                  onEdit={(idAddr) => openEditForm(idAddr) }
                />
              )
              : <InfoWrapper>
                  <p>O cliente ainda não possui endereços cadastrado</p>
                </InfoWrapper>
          : <AddressForm 
              idClient={idClient}
              idAddress={idAddress}
              callback={back}
            />
        }
        </DataContainer>
    </Container>
  );
}
