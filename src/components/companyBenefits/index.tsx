import React, { HtmlHTMLAttributes } from "react";
import * as S from "@/styles/components/companyBenefits/styles";
import Image from "next/image";

type componetBenefits = {
  icon: StaticImageData;
  tittle: string;
};

export default function companyBenefits({ ...props }: componetBenefits) {
  return (
    <S.Container>
      <S.ContainerIcon>
        <Image src={props.icon} alt={props.tittle}></Image>
      </S.ContainerIcon>
      <S.ContainerText>
        <h3>{props.tittle}</h3>
      </S.ContainerText>
    </S.Container>
  );
}
