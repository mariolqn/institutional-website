import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SEO from "@/components/SEO";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import * as S from "@/styles/pages/layout/styles";
// const inter = Inter({ subsets: ["latin"] });
import BgBlurs from "@/components/blurBackground";
import localFont from "next/font/local";

const futuraBoldFont = localFont({
  src: [
    {
      path: "../fonts/futura-std-extra-bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/futura-ts-demibold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/futura-ts-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/futura-ts-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--futuramediumbt",
});

export default function Index() {
  return (
    <main className={futuraBoldFont.variable}>
      <S.ContainerLayout style={{ display: "flex" }}>
        <SEO
          title={"Quantum Excalibur"}
          description={"Quantum Excalibur Corp"}
        ></SEO>
        <BgBlurs />
        <Header />
        <Home />
        <Footer />
      </S.ContainerLayout>
    </main>
  );
}
