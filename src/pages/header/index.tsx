import React from "react";
import * as S from "@/styles/components/header/style";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Button } from "@/styles/components/button/style";

export default function Header() {
  return (
    <S.Container>
      <S.ContainerMenu>
        <Image src={logo} alt="logo" width={234} height={155}></Image>
        <S.ContainerButtons>
          <h4>HOME</h4>
          <h4>ABOUT</h4>
          <h4>JOBS</h4>
          <Button>CONTACT US</Button>
        </S.ContainerButtons>
      </S.ContainerMenu>
    </S.Container>
  );
}
