import styled from 'styled-components';

export const ContainerTable = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Tr = styled.tr`
  td{
    &:nth-child(1) {
      @media (max-width: 576px) {
        display: none;
      
      }
    }
  }
  th{
    &:nth-child(1) {
      @media (max-width: 576px) {
        display: none;
      
      }
    }
  }
 
  
`;

export const Td = styled.td<{contrastcolor?: string}>`
  border-bottom: 2px solid #272626;
  text-align: left;
  align-items: center;
  padding: 15px;
  color: ${(props) => props.contrastcolor == 'true'?   "white" : props.theme.productDark4};
  h4{
    padding-left: 20px;
   
  }
  img{
    margin: 0px 15px 0px 0px;
  }
  @media (max-width: 576px) {
    padding: 1rem 0.1rem;
  }
`;
export const ColoredTh = styled.th`
  font-size: 1.6rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(to left, #FF6DC1 45% , #01F3FD 100%);
  text-align: start;
  padding: 15px;
  @media (max-width: 576px) {
    padding: 1rem 0.1rem;
  }
`;

export const Th = styled.th`
  text-align: left;
  font-size: 1.2rem;
  padding: 15px 15px 30px 15px;
`;

