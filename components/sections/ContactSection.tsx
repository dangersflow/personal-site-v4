import { motion } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AppContext from "../../context/AppContext";
import { Section, SmallText, Text, TextContainer } from "./Primitives";

interface ContactSectionProps {
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

const ContactSection = (props: ContactSectionProps) => {
  const { dispatch } = useContext(AppContext);
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      dispatch({
        type: "SET_CURRENT_PAGE_INDEX",
        payload: {
          currentPageIndex: 2,
        },
      });
    }
  }, [dispatch, inView]);

  return (
    <Section
      style={{
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
        <Text className={myFont.className}>contact</Text>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingLeft: "3rem",
          gap: "1rem",
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

export default ContactSection;
