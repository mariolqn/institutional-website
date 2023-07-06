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
import localFont from "next/font/local";
const futuraBoldfont = localFont({ src: "../fonts/futuramediumbt.ttf" });

export default function Index() {
  return (
    <main className={futuraBoldfont.className}>
      <S.ContainerLayout style={{ display: "flex" }}>
        <SEO
          title={"Quantum Excalibur"}
          description={"Quantum Excalibur Corp"}
        ></SEO>
        <Header />
        <Home />
        <Footer />
      </S.ContainerLayout>
    </main>
  );
}
