import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButtons = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    gap: 0rem;
  }
  @media (min-width: 576px) {
    gap: 2rem;
  }
  @media (min-width: 1025px) {
    gap: 4rem;
  }
  @media (min-width: 1225px) {
    gap: 7rem;
  }
`;
export const ButtonMenu = styled.button`
  font-size: 0.9rem;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  color: white;
`;
