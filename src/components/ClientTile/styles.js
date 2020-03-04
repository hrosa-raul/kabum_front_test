import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  border-bottom: 1px solid black;
  display:flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 70px;
  align-content:center;
  justify-content:space-between;  
  
  p {
    font-size:22px;
    margin-right: 20px; 
  }
`

export const ButtonContainer = styled.div`
  display:flex;
  align-items:flex-end;

  button {
    align-self: right;
    width: 60px;
    margin: 0 5px 5px 0;
    height: 30px;
    background: #58ACFA;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
  }

  .delete {
    background: #f44336;
  }  
`
