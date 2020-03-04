import styled from 'styled-components';

export const CenterInfo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height: 85%;
    
  h2 {
    align-self:center;
    color: #2196F3
  }
`
export const ButtonContainer = styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:flex-end;
  width: 100%;

  button {
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
`
export const WrapperList = styled.div`
 height: 85%;
 overflow: auto;
`