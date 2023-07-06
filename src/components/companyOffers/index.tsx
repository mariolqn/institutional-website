import React, { HtmlHTMLAttributes } from "react";
import * as S from "@/styles/components/companyOffers/styles";
import Image from "next/image";

type componetOffers = {
  image: StaticImageData;
  tittle: string;
  description: string;
};

export default function CompanyOffers({ ...props }: componetOffers) {
  return (
    <S.Container>
      <S.ContainerElements>
        <Image src={props.image} alt={props.tittle}></Image>
        <h3>{props.tittle}</h3>
        <h4>{props.description}</h4>
      </S.ContainerElements>
    </S.Container>
  );
}
