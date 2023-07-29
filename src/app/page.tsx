"use client";

import { useMotionValue, useTransform } from "framer-motion";
import localFont from "next/font/local";
import { useContext } from "react";
import { HomeSection } from "../../components/sections/HomeSection";
import { MainWrapper, Section } from "../../components/sections/Primitives";
import AppContext from "../../context/AppContext";
import image from "../../public/abstract.jpg";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/Canno.ttf" });
const myFont2 = localFont({ src: "../../public/Galgo.otf" });

const firstName = "francisco";
const lastName = "gonzalez.";

export default function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { dispatch } = useContext(AppContext);

  return (
    <MainWrapper layout>
      <HomeSection firstName={firstName} lastName={lastName} image={image} />
      <Section>
        <h1>Page 1</h1>
      </Section>
    </MainWrapper>
  );
}
