import React from "react";
import * as S from "@/styles/pages/home/styles";
import CompanyOffers from "@/components/companyOffers";
import { listOffersData } from "@/data/componetOffersData";
import CompanyBenefits from "@/components/companyBenefits";
import { listBenefitsData } from "@/data/companyBenefitsData";

export default function Home() {
  return (
    <S.Container>
      <S.ContainerAction>
        <h1>Quantum Excalibur</h1>
        <h2>Corp featured in AI</h2>
        <div>
          <h4>We offer an extensive range of audio-visual services</h4>
          <h4>encompassing video and photo editing, color grading, VFX,</h4>
          <h4>marketing and programming</h4>
          <h5>Want to know more about our services?</h5>
          <button>Click Here</button>
        </div>
      </S.ContainerAction>
      <S.TittleOffers>
        First, our company offers an extensive range of audio-visual services
      </S.TittleOffers>
      <S.ContainerOffers>
        {listOffersData.map((value, index) => (
          <CompanyOffers
            key={index}
            image={value.image}
            tittle={value.tittle}
            description={value.description}
          ></CompanyOffers>
        ))}
      </S.ContainerOffers>
      <S.ContainerSecondArea>
        <S.ContainerTextLeft>
          <div style={{ display: "flex" }}>
            <S.TittleColor>Second </S.TittleColor>
            <S.TittleColor colored={true}> Area</S.TittleColor>
          </div>
          <h4>
            Expertise lies in corporate consulting, where we help businesses
            optimize their operations by identifying areas that can benefit from
            AI integration.
          </h4>
        </S.ContainerTextLeft>
        <S.ContainerBannersRight>
          <S.ContainerTopText>
            <S.ContainerTexts>
              <S.ContainerBorderText>
                <h5>Horizontal software</h5>
                <h5>solutions across industries</h5>
              </S.ContainerBorderText>
              <S.ContainerBorderText>
                <h5>Vertical software solutions focused</h5>
                <h5>in a specific niche</h5>
              </S.ContainerBorderText>
            </S.ContainerTexts>
            <S.CompanyBenefits>
              {listBenefitsData.map((value, index) => (
                <CompanyBenefits
                  key={index}
                  icon={value.icon}
                  tittle={value.tittle}
                  index={index}
                ></CompanyBenefits>
              ))}
            </S.CompanyBenefits>
          </S.ContainerTopText>
        </S.ContainerBannersRight>
      </S.ContainerSecondArea>
    </S.Container>
  );
}
