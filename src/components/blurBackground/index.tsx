import React from "react";
import Image from "next/image";
import Blur1 from "../../assets/images/blur/Blur2.png";

import * as S from "@/styles/components/blurBackground/styles";
export default function BgBlurs() {
  return (
    <S.Container>
      <S.PositionImage>
        <Image
          src={Blur1}
          alt="blur"
          sizes="100vw"
          style={{ width: "100%", objectFit: "cover" }}
        ></Image>
      </S.PositionImage>
    </S.Container>
  );
}
