import React from "react";
import * as S from "@/styles/components/timeLine/style";
import { listTimeLine } from "./data";

export default function TimeLine() {
  return (
    <S.Container>
      <div>
        {listTimeLine.map((value, index) => (
          <S.ContainerLeft
            key={index}
            appear={index % 2 === 0 ? "true" : "false"}
          >
            <S.TimeText>{value.Tittle}</S.TimeText>
            <h2>{value.description}</h2>
          </S.ContainerLeft>
        ))}
      </div>
      <div>
        {listTimeLine.map((value, index) => (
          <div key={index}>
            <S.ContainerMiddle>
              <S.Circle>{index + 1}</S.Circle>
              {listTimeLine.length - 1 != index && <S.Divider />}
            </S.ContainerMiddle>
          </div>
        ))}
      </div>
      <div>
        {listTimeLine.map((value, index) => (
          <S.ContainerRight
            key={index}
            appear={index % 2 === 1 ? "true" : "false"}
          >
            <S.TimeText>{value.Tittle}</S.TimeText>
            <h2>{value.description}</h2>
          </S.ContainerRight>
        ))}
      </div>
    </S.Container>
  );
}
