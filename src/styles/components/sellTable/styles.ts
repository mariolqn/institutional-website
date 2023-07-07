import styled from 'styled-components';

export const ContainerTable = styled.div`
  width: 100%;
`;

export const Table = styled.div`
  width: 100%;
`;

export const Td = styled.td<{contrastColor?: boolean}>`
  border-bottom: 2px solid #272626;
  text-align: left;
  align-items: center;
  padding: 15px;
  color: ${(props) => props.contrastColor ?   "white" : props.theme.productDark4};
  h4{
    padding-left: 20px;
  }
  img{
    margin: 0px 15px 0px 0px;
  }
`;
export const ColoredTd = styled.td`
  font-size: 1.6rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(to left, #FF6DC1 45% , #01F3FD 100%);
`;

export const Th = styled.th`
  text-align: left;
  font-size: 1.2rem;
  padding: 15px 15px 30px 15px;
`;

