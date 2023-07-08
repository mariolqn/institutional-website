import React from "react";
import * as S from "@/styles/components/header/style";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Button } from "@/styles/components/button/style";
import { useRouter } from "next/router";

export default function Header() {
  const { push } = useRouter();

  return (
    <S.Container id="home">
      <S.ContainerMenu>
        <Image src={logo} alt="logo" width={234} height={155}></Image>
        <S.ContainerButtons>
          <S.ButtonMenu onClick={() => push("#home")}>HOME</S.ButtonMenu>
          <S.ButtonMenu onClick={() => push("#about")}>ABOUT</S.ButtonMenu>
          <S.ButtonMenu onClick={() => push("#jobs")}>JOBS</S.ButtonMenu>
          <Button>CONTACT US</Button>
        </S.ContainerButtons>
      </S.ContainerMenu>
    </S.Container>
  );
}
