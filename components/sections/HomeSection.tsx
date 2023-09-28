import AppContext from "../../context/AppContext";
import Image from "next/image";
import localFont from "next/font/local";
import { useCallback, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  FirstNameContainer,
  LastNameContainer,
  Section,
  Text,
} from "./Primitives";

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
  const { dispatch } = useContext(AppContext);
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const [firstNameArray, setFirstNameArray] = useState(emptyStringArray);
  const [firstNameCounter, setFirstNameCounter] = useState(0);

  const [lastNameArray, setLastNameArray] = useState(emptyStringArray);
  const [lastNameCounter, setLastNameCounter] = useState(0);

  const [firstNameDone, setFirstNameDone] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // This code handles the first name animation.
  // It renders the first name letter by letter, and then renders the last name letter by letter after the first name is done rendering.
  const handleFirstName = useCallback(() => {
    // If the first name is done rendering, set the state to done.
    if (firstNameCounter === props.firstName.length) {
      setFirstNameDone(true);
    }
    // If the image is loaded, render the next letter in the first name.
    else if (imageLoaded) {
      setTimeout(() => {
        setFirstNameArray((prev) => [
          ...prev,
          props.firstName[firstNameCounter],
        ]);
        setFirstNameCounter((prev) =>
          prev < props.firstName.length ? prev + 1 : prev
        );
      }, Math.floor(Math.random() * 100 + 50));
      console.log(firstNameArray);
    }
  }, [firstNameArray, firstNameCounter, imageLoaded, props.firstName]);

  const updateLastNameArray = useCallback(() => {
    setLastNameArray((prev) => [...prev, props.lastName[lastNameCounter]]);
    setLastNameCounter((prev) =>
      prev < props.lastName.length ? prev + 1 : prev
    );
  }, [lastNameCounter, props.lastName]);

  const updateLastName = useCallback(() => {
    if (firstNameDone) {
      setTimeout(() => {
        if (firstNameDone) {
        }
        updateLastNameArray();
      }, Math.floor(Math.random() * 100 + 50));
      console.log(lastNameArray);
    }
  }, [firstNameDone, lastNameArray, updateLastNameArray]);

  useEffect(() => {
    handleFirstName();
  }, [firstNameCounter, handleFirstName, imageLoaded]);

  useEffect(() => {
    if (firstNameDone) {
      updateLastName();
    }
  }, [lastNameCounter, firstNameDone, updateLastName]);

  useEffect(() => {
    if (inView) {
      dispatch({
        type: "SET_CURRENT_PAGE_INDEX",
        payload: {
          currentPageIndex: 0,
        },
      });
    }
  }, [dispatch, inView]);

  return (
    <Section
      style={{
        backgroundColor: "#292933",
        // backgroundImage: `url(${props.image.src})`,
        // backgroundSize: "cover",
      }}
      layout
      ref={ref}
      id="home"
    >
      <Image
        src={props.image.src}
        alt="background-image1"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        fill
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      <FirstNameContainer>
        {firstNameArray.map((letter, index) => (
          <Text
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
          </Text>
        ))}
        {firstNameDone !== true && (
          <Text
            key={"caret"}
            style={{ fontWeight: "100" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            |
          </Text>
        )}
      </FirstNameContainer>
      <LastNameContainer>
        {lastNameArray.map((letter, index) => (
          <Text
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
          </Text>
        ))}
        {firstNameDone && (
          <Text key={"caret"} style={{ fontWeight: "100" }}>
            |
          </Text>
        )}
      </LastNameContainer>
    </Section>
  );
};
