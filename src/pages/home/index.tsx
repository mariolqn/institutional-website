import IconEmail from "@/assets/svg/IconEmail.svg";
import IconLinkedin from "@/assets/svg/IconLinkedIn.svg";
import Logo from "@/assets/svg/logosimple.svg";
import CompanyBenefits from "@/components/companyBenefits";
import CompanyOffers from "@/components/companyOffers";
import FormEmail from "@/components/formEmail";
import SellTable from "@/components/sellTable";
import TimeLine from "@/components/timeLine";
import { listBenefitsData } from "@/data/companyBenefitsData";
import { listOffersData } from "@/data/componetOffersData";
import { Button } from "@/styles/components/button/style";
import * as S from "@/styles/pages/home/styles";
import Image from "next/image";

export default function Home() {
  return (
    <S.Container>
      <section>
        <S.ContainerAction>
          <h1>Quantum Excalibur</h1>
          <h2>Corp featured in AI</h2>
          <div>
            <h4>We offer an extensive range of audio-visual services</h4>
            <h4>encompassing video and photo editing, color grading, VFX,</h4>
            <h4>marketing and programming</h4>
            <h5>Want to know more about our services?</h5>
            <Button fullwidth={"false"}>Click Here</Button>
          </div>
        </S.ContainerAction>
      </section>
      <section>
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
      </section>
      <section id="about">
        <S.ContainerSecondArea>
          <S.ContainerTextLeft>
            <div style={{ display: "flex" }}>
              <S.TittleColor colored={"false"}>Second </S.TittleColor>
              <S.TittleColor colored={"true"}> Area</S.TittleColor>
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
                <S.ContainerBorderTextColored>
                  <h5>Vertical software solutions focused</h5>
                  <h5>in a specific niche</h5>
                </S.ContainerBorderTextColored>
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
      </section>
      <section id="jobs">
        <S.ContainerTable>
          <S.ContainerTextTitle>
            <h1>Why sell to us?</h1>
            <h4>
              Avalerian bring experience, growth and independence for you.
            </h4>
          </S.ContainerTextTitle>
          <SellTable />
        </S.ContainerTable>
      </section>
      <section>
        <S.ContainerProcess>
          <S.ContainerLeft>
            <TimeLine />
          </S.ContainerLeft>
          <S.ContainerRight>
            <div style={{ display: "flex" }}>
              <h2>Exit</h2> <h1>Fast.</h1>
            </div>
            <h3>
              Our process emphasizes fast, lucrative exits for software founders
            </h3>
            <Button fullwidth={"false"}>Get started</Button>
          </S.ContainerRight>
        </S.ContainerProcess>
      </section>
      <section id="contact" style={{ width: "100%" }}>
        <S.ContainerEmail>
          <S.ContainerEmailLeft>
            <Image src={Logo} alt="logo" width={112} height={155} />
            <div>
              <h1>Get in touch</h1>
              <h4>
                Thinking of selling, or you know someone whom we should meet?
              </h4>
              <S.ContainerSocial>
                <Image
                  src={IconLinkedin}
                  alt="Icon Linkedin"
                  width={35}
                  height={35}
                ></Image>
                <Image
                  src={IconEmail}
                  alt="Icon Email"
                  width={35}
                  height={35}
                ></Image>
                <h4>contact@quantumexcalibur.com</h4>
              </S.ContainerSocial>
            </div>
          </S.ContainerEmailLeft>
          <S.ContainerEmailRight>
            {/* <FormEmail /> */}
            <iframe
              src="https://quantum-bblvx.formstack.com/forms/institutionalform"
              title="institutionalform"
              width="600"
              height="540"
              frameBorder="0"
            ></iframe>
          </S.ContainerEmailRight>
        </S.ContainerEmail>
      </section>
    </S.Container>
  );
}
