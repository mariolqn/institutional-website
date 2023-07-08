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
  gap: 7rem;
  button {
    font-size: 0.9rem;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    color: white;
  }
`;
