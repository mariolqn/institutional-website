import styled from "styled-components";
import Image from "next/image";
import logo from "../../../assets/svg/logo.svg";
import logoSimple from "../../../assets/svg/logoSimple.svg";
import { Menu } from "@styled-icons/evaicons-solid/Menu";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
export const Container = styled.div`
  padding: 2rem 0rem;
  width: 100%;
  align-items: center;
  @media (max-width: 576px) {
    padding: 1rem 0rem 0rem 0rem;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButtons = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0rem;
    display: none;
  }
  @media (min-width: 768px) {
    gap: 2rem;
  }
  @media (min-width: 1025px) {
    gap: 4rem;
  }
  @media (min-width: 1225px) {
    gap: 4.5rem;
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
export const ContainerNavMobile = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  align-content: flex-end;
  flex-direction: column;
  background: red;
`;

export const NavBarMobile = styled.nav<{ showsidebar: string }>`
  padding: 6rem 2rem 2rem 2rem;
  width: 14.2rem;
  background: ${(props) => props.theme.productDark5};
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: -7.8rem;
  right: ${(props) => (props.showsidebar == "true" ? "0" : "100%")};

  animation: ${(props) =>
    props.showsidebar ? "animShowSidebar 0.4s" : "closeShowSidebar 0.4s"};
  gap: 2rem;
  button {
    z-index: 9999999;
    color: white;
    height: 2rem;
    width: 100%;
  }
  @keyframes animShowSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 14.2rem;
    }
  }
  @keyframes animCloseSidebar {
    from {
      opacity: 1;
      width: 14.2rem;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }
`;

export const ContainerButtonHamburguer = styled.button`
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  background: transparent;
  svg {
    color: white;
  }
  * {
    color: white;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const IconMenu = styled(Menu)`
  width: 2rem;
  height: 2rem;
  color: white;
`;

export const IconCloseOutline = styled(CloseOutline)`
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`;
