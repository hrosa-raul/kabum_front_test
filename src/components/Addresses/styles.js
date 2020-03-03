import styled from 'styled-components';

export const Container = styled.div`
  height: 50%;
  
  width: 100%;
  margin-top: 10px;
  padding-right: 8px;
  padding-left: 8px;
  
  h2 {
    font-size: 20px;
  }
`;

export const DataContainer = styled.div`
  overflow: auto;
  height: 100%;
`

export const InfoWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  text-align: center;

  p {
    margin-top: 80px;
    text-align: center;
    font-size: 24px;
    color: #2196F3
  }
`

export const LineHead = styled.div`
  display:flex;
  flex-direction: row;
  align-content:center;
  justify-content:space-between; 
  padding-bottom: 5px;

  button {
    width:200px;
    height:30px;
    background: #58ACFA;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
  
  } 
`;