import React, { useState } from "react";
import * as S from "@/styles/components/header/style";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Button } from "@/styles/components/button/style";
import { useRouter } from "next/router";
import menu from "@/assets/svg/menu.svg";

export default function Header() {
  const { push } = useRouter();
  const [openmenu, SetOpenMenu] = useState<boolean>(false);
  return (
    <S.Container id="home">
      <S.ContainerMenu>
        <Image src={logo} alt="logo" width={234} height={155}></Image>
        <S.ContainerButtonHamburguer onClick={() => SetOpenMenu(true)}>
          <S.IconMenu />
        </S.ContainerButtonHamburguer>
        {openmenu && (
          <S.ContainerNavMobile>
            <S.NavBarMobile showSideBar={openmenu}>
              <S.IconCloseOutline onClick={() => SetOpenMenu(false)}>
                close
              </S.IconCloseOutline>
              <S.ButtonMenu
                onClick={() => {
                  push("#home");
                  SetOpenMenu(false);
                }}
              >
                HOME
              </S.ButtonMenu>
              <S.ButtonMenu
                onClick={() => {
                  push("#about");
                  SetOpenMenu(false);
                }}
              >
                ABOUT
              </S.ButtonMenu>
              <S.ButtonMenu
                onClick={() => {
                  push("#jobs");
                  SetOpenMenu(false);
                }}
              >
                JOBS
              </S.ButtonMenu>
              <Button>CONTACT US</Button>
            </S.NavBarMobile>
          </S.ContainerNavMobile>
        )}

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
