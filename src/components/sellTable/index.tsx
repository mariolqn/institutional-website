import React from "react";
import * as S from "@/styles/components/sellTable/styles";
import Image from "next/image";
import Check from "@/assets/svg/check.svg";
import Close from "@/assets/svg/close.svg";

export default function SellTable() {
  return (
    <S.ContainerTable>
      <S.Table>
        <tr>
          <S.Th></S.Th>
          <S.ColoredTd>Avalerian</S.ColoredTd>
          <S.Th>Private equity</S.Th>
          <S.Th>Venture Capital</S.Th>
        </tr>
        <tr>
          <S.Td contrastColor={true}>
            Ability to hand over day-to-day management
          </S.Td>
          <S.Td>
            <Image src={Check} alt="check icon" />
            We take over management
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Often required to remain post-acquisition
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Continue running the company
          </S.Td>
        </tr>
        <tr>
          <S.Td contrastColor={true}>Founder payout</S.Td>
          <S.Td>
            <Image src={Check} alt="check icon" />
            Bespoke terms with full or partial cash exit
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Locked into long-term incentive structure
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            No exit until sale or IPO
          </S.Td>
        </tr>
        <tr>
          <S.Td contrastColor={true}>Process</S.Td>
          <S.Td>
            <Image src={Check} alt="check icon" />
            Fast and simple process that can work with your timeline
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Process can last for months
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Months-long complicated process, requiring multiple investors to buy
            in
          </S.Td>
        </tr>
        <tr>
          <S.Td contrastColor={true}>Time horizon</S.Td>
          <S.Td>
            <Image src={Check} alt="check icon" />
            Plan to operate for long-term
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Goal to sell in 3-5 years
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Focus only until next round
          </S.Td>
        </tr>
        <tr>
          <S.Td contrastColor={true}>Approach to growth</S.Td>
          <S.Td>
            <Image src={Check} alt="check icon" />
            Long-term sustainable growth orientation
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Focus on short-term value creation, which often leads to
            cost-cutting and layoffs
          </S.Td>
          <S.Td>
            <Image src={Close} alt="check icon" />
            Unsustainable growth fueled by VC capital that pushes company to its
            limits
          </S.Td>
        </tr>
      </S.Table>
    </S.ContainerTable>
  );
}
