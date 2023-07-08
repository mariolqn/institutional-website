import styled from "styled-components";

export const Container = styled.div<{ changeColor?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;
  width: 100%;

  img {
    width: 4rem;
    height: 4rem;
  }
  border-top: 1px solid
    ${(props) =>
      props.changeColor
        ? props.theme.productAccent1
        : props.theme.productAccent2};
  justify-content: space-between;
  background: ${(props) => props.theme.productDark5};
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    margin-bottom: 0rem;
  }
  @media (min-width: 576px) {
    margin-bottom: 0rem;
  }
`;
export const ContainerText = styled.div`
  font-size: 0.8rem;
  max-width: 15rem;
  text-align: start;
  margin: 1.5rem 0rem 0.5rem 0rem;
`;
