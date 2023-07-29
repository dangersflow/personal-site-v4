import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { Section } from "./Primitives";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/Canno.ttf" });
const myFont2 = localFont({ src: "../../public/Galgo.otf" });

interface MainSectionProps {
  firstName: string;
  lastName: string;
  image: any;
}

export const HomeSection = (props: MainSectionProps) => {
  const emptyStringArray: string[] = [];

  const [firstNameArray, setFirstNameArray] = useState(emptyStringArray);
  const [firstNameCounter, setFirstNameCounter] = useState(0);

  const [lastNameArray, setLastNameArray] = useState(emptyStringArray);
  const [lastNameCounter, setLastNameCounter] = useState(0);

  const [firstNameDone, setFirstNameDone] = useState(false);

  useEffect(() => {
    if (firstNameCounter === props.firstName.length) {
      setFirstNameDone(true);
    } else {
      setTimeout(() => {
        setFirstNameArray((prev) => [
          ...prev,
          props.firstName[firstNameCounter],
        ]);
        setFirstNameCounter((prev) =>
          prev < props.firstName.length ? prev + 1 : prev
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
        setLastNameArray((prev) => [...prev, props.lastName[lastNameCounter]]);
        setLastNameCounter((prev) =>
          prev < props.lastName.length ? prev + 1 : prev
        );
      }, Math.floor(Math.random() * 200 + 100));
      console.log(lastNameArray);
    }
  }, [lastNameCounter, firstNameDone]);

  return (
    <Section
      style={{
        backgroundColor: "#292933",
        backgroundImage: `url(${props.image.src})`,
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
  );
};
