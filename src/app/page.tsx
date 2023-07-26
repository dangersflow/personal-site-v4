"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../../public/abstract.jpg";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/Canno.ttf" });
const myFont2 = localFont({ src: "../../public/Galgo.otf" });

const firstName = "francisco";
const lastName = "gonzalez.";

const MainWrapper = styled(motion.main)`
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Section = styled(motion.section)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 13rem;
  text-align: center;
  text-wrap: balance;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100dvh;

  background-color: #dfdbe5;
`;

const Text = styled(motion.span)`
  font-size: 5rem;
`;

export default function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100);

    return controls.stop;
  }, []);

  const emptyStringArray: string[] = [];

  const [firstNameArray, setFirstNameArray] = useState(emptyStringArray);
  const [firstNameCounter, setFirstNameCounter] = useState(0);

  const [lastNameArray, setLastNameArray] = useState(emptyStringArray);
  const [lastNameCounter, setLastNameCounter] = useState(0);

  const [firstNameDone, setFirstNameDone] = useState(false);

  useEffect(() => {
    if (firstNameCounter === firstName.length) {
      setFirstNameDone(true);
    } else {
      setTimeout(() => {
        setFirstNameArray((prev) => [...prev, firstName[firstNameCounter]]);
        setFirstNameCounter((prev) =>
          prev < firstName.length ? prev + 1 : prev
        );
      }, Math.floor(Math.random() * 200 + 100));
      console.log(firstNameArray);
    }
  }, [firstNameCounter]);

  useEffect(() => {
    if (firstNameDone) {
      setTimeout(() => {
        if (firstNameDone) {
        }
        setLastNameArray((prev) => [...prev, lastName[lastNameCounter]]);
        setLastNameCounter((prev) =>
          prev < lastName.length ? prev + 1 : prev
        );
      }, Math.floor(Math.random() * 200 + 100));
      console.log(lastNameArray);
    }
  }, [lastNameCounter, firstNameDone]);

  return (
    <AnimatePresence>
      <MainWrapper layout>
        <Section
          style={{
            backgroundColor: "#292933",
            backgroundImage: `url(${image.src})`,
          }}
          layout
        >
          <motion.div
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingRight: "20%",
              justifyContent: "flex-end",
            }}
          >
            {firstNameArray.map((letter, index) => (
              <motion.span
                layout
                key={index}
                className={myFont.className}
                initial={{ y: 5, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 1200,
                  damping: 200,
                }}
              >
                {letter}
              </motion.span>
            ))}
            {firstNameDone !== true && (
              <motion.div
                key={"caret"}
                style={{ fontWeight: "100" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                |
              </motion.div>
            )}
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              paddingLeft: "20%",
              paddingRight: "1%",
            }}
          >
            {lastNameArray.map((letter, index) => (
              <motion.span
                layout
                key={index}
                className={myFont.className}
                initial={{ y: 5, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 1200,
                  damping: 200,
                }}
              >
                {letter}
              </motion.span>
            ))}
            {firstNameDone && (
              <motion.div key={"caret"} style={{ fontWeight: "100" }}>
                |
              </motion.div>
            )}
          </motion.div>
        </Section>
        <Section>
          <h1>Page 1</h1>
        </Section>
      </MainWrapper>
    </AnimatePresence>
  );
}
