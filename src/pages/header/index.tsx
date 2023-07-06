import React from "react";
import * as S from "@/styles/components/header/style";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";

export default function Header() {
  return (
    <S.Container>
      <S.ContainerMenu>
        <Image src={logo} alt="logo"></Image>
        <h4>HOME</h4>
        <h4>ABOUT</h4>
        <h4>JOBS</h4>
        <button>CONTACT US</button>
      </S.ContainerMenu>
    </S.Container>
  );
}
