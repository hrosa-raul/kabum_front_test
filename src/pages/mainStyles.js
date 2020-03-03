import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Container = styled.div`
  width: 80%;
  height: 90%;
  background-color: #CECEF6;
  padding: 10px;

  h1 {
    text-align: center;
    font-size: 22px;
  }
`;


export const FormContainer = styled.div`
  form {
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    
    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin: 0 0 10px;
      min-width: 300px;
      width: 100%;
      

      &.readonly {
        background: rgba(0,0,0,0.1) !important;
      }
    }
    .react-datepicker-wrapper{
      min-width: 300px;
      width: 100%;
      margin: 0;
      margin-right: 20px;
      input &::placeholder{ 
        color: #fff
      }
    }

    .btn-submit {
      align-self: center;
      width: 100%;
      margin-top: 18px;
      height: 40px;
      background: #58ACFA;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
    }

    span {
      color: #FE2E2E;
      align-self: flex-start;
      margin: 0 0 4px;
      font-weight: bold;
    }
  }
`;

export const Row = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
`;

export const Group = styled.div`
  display:flex;
  flex-direction: column;
  align-content:left;
  width: 100%;
  margin: 0px 10px 0 5px ;

  p {
    font-weight: bold;
  }
`