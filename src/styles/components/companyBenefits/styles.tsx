import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: flex-start;
  width: 100%;
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
  border-top: 1px solid ${(props) => props.theme.productAccent1};
  justify-content: space-between;
  background: ${(props) => props.theme.productDark5};
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerText = styled.div`
  font-size: 0.5rem;
  max-width: 10rem;
  text-align: start;
  margin: 1.5rem 0rem 0.5rem 0rem;
`;
