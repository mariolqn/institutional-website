import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1rem;
    max-width: 10rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  h4 {
    max-width: 10rem;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.3;
    color: ${(props) => props.theme.productDark4};
  }
  img {
    @media (max-width: 576px) {
      width: 120px;
      height: 120px;
    }
  }
`;
