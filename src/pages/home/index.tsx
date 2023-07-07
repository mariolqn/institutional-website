import React from "react";
import * as S from "@/styles/pages/home/styles";
import CompanyOffers from "@/components/companyOffers";
import { listOffersData } from "@/data/componetOffersData";
import CompanyBenefits from "@/components/companyBenefits";
import { listBenefitsData } from "@/data/companyBenefitsData";
import Image from "next/image";
import Logo from "@/assets/svg/logosimple.svg";
import IconLinkedin from "@/assets/svg/IconLinkedIn.svg";
import IconEmail from "@/assets/svg/IconEmail.svg";
import FormEmail from "@/components/formEmail";
import { Button } from "@/styles/components/button/style";
import SellTable from "@/components/sellTable";
export default function Home() {
  return (
    <S.Container>
      <>
        <S.ContainerAction>
          <h1>Quantum Excalibur</h1>
          <h2>Corp featured in AI</h2>
          <div>
            <h4>We offer an extensive range of audio-visual services</h4>
            <h4>encompassing video and photo editing, color grading, VFX,</h4>
            <h4>marketing and programming</h4>
            <h5>Want to know more about our services?</h5>
            <Button>Click Here</Button>
          </div>
        </S.ContainerAction>
      </>
      <>
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
      </>

      <>
        <S.ContainerSecondArea>
          <S.ContainerTextLeft>
            <div style={{ display: "flex" }}>
              <S.TittleColor>Second </S.TittleColor>
              <S.TittleColor colored={true}> Area</S.TittleColor>
            </div>
            <h4>
              Expertise lies in corporate consulting, where we help businesses
              optimize their operations by identifying areas that can benefit
              from AI integration.
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
      </>
      <>
        <S.ContainerTextTitle>
          <h1>Why sell to us?</h1>
          <h4>Avalerian bring experience, growth and independence for you.</h4>
        </S.ContainerTextTitle>
        <SellTable />

        {/* <S.ContainerEmail>
          <S.ContainerEmailLeft>
            <Image src={Logo} alt="logo"></Image>
            <div>
              <h1>Get in touch</h1>
              <h4>
                Thinking of selling, or you know someone whom we should meet?
              </h4>
              <S.ContainerSocial>
                <Image src={IconLinkedin} alt="Icon Linkedin"></Image>
                <Image src={IconEmail} alt="Icon Email"></Image>
                <h4>contact@quantumexcalibur.com</h4>
              </S.ContainerSocial>
            </div>
          </S.ContainerEmailLeft>
          <S.ContainerEmailRight>
            <FormEmail></FormEmail>
          </S.ContainerEmailRight>
        </S.ContainerEmail> */}
      </>
    </S.Container>
  );
}
