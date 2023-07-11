import React, { HtmlHTMLAttributes } from "react";
import * as S from "@/styles/components/companyBenefits/styles";
import Image from "next/image";

type componetBenefits = {
  icon: StaticImageData;
  tittle: string;
  index: number;
};

export default function companyBenefits({ ...props }: componetBenefits) {
  return (
    <S.Container changecolor={props.index % 2 === 1 ? "true" : "false"}>
      <S.ContainerIcon>
        <Image
          src={props.icon}
          alt={props.tittle}
          width={90}
          height={90}
          style={{ width: "100%" }}
        ></Image>
      </S.ContainerIcon>
      <S.ContainerText>
        <h3>{props.tittle}</h3>
      </S.ContainerText>
    </S.Container>
  );
}
