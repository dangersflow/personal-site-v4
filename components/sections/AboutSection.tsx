import AppContext from "../../context/AppContext";
import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Section, SmallText, Text, TextContainer } from "./Primitives";

interface AboutSectionProps {
  image: any;
}

const myFont = localFont({ src: "../../public/Canno.ttf" });
const myFont2 = localFont({ src: "../../public/proxima.otf" });

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

const AboutSection = (props: AboutSectionProps) => {
  const { dispatch } = useContext(AppContext);
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      dispatch({
        type: "SET_CURRENT_PAGE_INDEX",
        payload: {
          currentPageIndex: 1,
        },
      });
    }
  }, [dispatch, inView]);

  return (
    <Section
      style={{
        backgroundColor: "#292933",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "2rem",
      }}
      layout
      ref={ref}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 100,
      }}
      id="about"
    >
      <Image
        src={props.image.src}
        alt="background-image1"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        fill
      />
      <motion.div
        style={{
          display: "flex",
          paddingLeft: "3rem",
          zIndex: 1,
        }}
        layout
        animate={inView && "visible"}
        variants={variants}
        initial="hidden"
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 100,
        }}
      >
        <Text className={myFont.className}>about</Text>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "1.5rem",
        }}
      >
        <TextContainer
          layout
          animate={inView && "visible"}
          variants={variants}
          initial="hidden"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 100,
            delay: 0.5,
          }}
        >
          <SmallText className={myFont2.className}>{`👋 hello! `}</SmallText>
        </TextContainer>
        <TextContainer
          layout
          animate={inView && "visible"}
          variants={variants}
          initial="hidden"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 100,
            delay: 0.8,
          }}
        >
          <SmallText
            className={myFont2.className}
          >{`my name is frank and i'm a software engineer && web developer `}</SmallText>
        </TextContainer>
        <TextContainer
          layout
          animate={inView && "visible"}
          variants={variants}
          initial="hidden"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 100,
            delay: 1.1,
          }}
        >
          <SmallText
            className={myFont2.className}
          >{`i like to create cool things and websites :) `}</SmallText>
        </TextContainer>
        <TextContainer
          layout
          animate={inView && "visible"}
          variants={variants}
          initial="hidden"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 100,
            delay: 1.4,
          }}
        >
          <SmallText
            className={myFont2.className}
          >{`thanks for stopping by `}</SmallText>
        </TextContainer>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
