import styled from 'styled-components';

export const FormContainer = styled.div`
  form {
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    
    input {
      background: rgba(0,0,0,0.3);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      min-width: 300px;
      width: 100%;
      &::placeholder{ 
        color: #fff
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
      align-self: right;
      width: 220px;
      margin: 5px;
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
      margin: 0 0 10px;
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


