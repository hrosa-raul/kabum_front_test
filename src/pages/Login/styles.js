import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #CECEF6
`;



export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  form {
    display:flex;
    flex-direction: column;
    
    input {
      background: rgba(0,0,0,0.1);
      border: 0;
      border-radius: 4px;
      height: 48px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder{
        color: rgba(255,255,255,0.7)
      }
    }

    span {
      color: #FE2E2E;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      background: #58ACFA;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
    }

  }
`;