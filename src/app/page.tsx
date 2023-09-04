"use client";
import AboutSection from "../../components/sections/AboutSection";
import AppContext from "../../context/AppContext";
import ContactSection from "../../components/sections/ContactSection";
import PageViewer from "../../components/sections/PageViewer";
import image from "../../public/blackcomp.webp";
import image2 from "../../public/blackcomp2.webp";
import localFont from "next/font/local";
import { LayoutGroup } from "framer-motion";
import { useContext } from "react";
import { HomeSection } from "../../components/sections/HomeSection";
import { MainWrapper } from "../../components/sections/Primitives";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/Canno.ttf" });
const myFont2 = localFont({ src: "../../public/Galgo.otf" });

const firstName = "francisco";
const lastName = "gonzalez.";

export default function Home() {
  const { dispatch } = useContext(AppContext);

  return (
    <MainWrapper layoutScroll>
      <LayoutGroup>
        <HomeSection firstName={firstName} lastName={lastName} image={image} />
        <AboutSection image={image2} />
        <ContactSection image={image} />
      </LayoutGroup>
      <PageViewer />
    </MainWrapper>
  );
}
