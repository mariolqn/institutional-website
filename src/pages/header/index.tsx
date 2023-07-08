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
          <button>HOME</button>
          <button>ABOUT</button>
          <button>JOBS</button>
          <Button>CONTACT US</Button>
        </S.ContainerButtons>
      </S.ContainerMenu>
    </S.Container>
  );
}
