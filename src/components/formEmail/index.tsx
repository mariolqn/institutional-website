import React from "react";

import * as S from "@/styles/components/formEmail/styles";
import { Button } from "@/styles/components/button/style";

export default function FormEmail() {
  return (
    <S.Container>
      <S.Form>
        <div>
          <S.Input placeholder="First Name"></S.Input>
          <S.Input placeholder="Last Name"></S.Input>
        </div>
        <S.Input placeholder="Email"></S.Input>
        <S.Input placeholder="Your company's website"></S.Input>
        <S.Input placeholder="Describe your company in 1 sentence"></S.Input>
        <S.Input placeholder="ARR Range"></S.Input>
        <Button fullWidth={true}>Send</Button>
      </S.Form>
    </S.Container>
  );
}
