import AppContext from "../../context/AppContext";
import localFont from "next/font/local";
import { TargetAndTransition, Transition, motion } from "framer-motion";
import { useContext } from "react";
import { styled } from "styled-components";
import { ExtraSmallText } from "./Primitives";

const PageViewerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 10%;
  right: 5%;
  padding: 1rem;
  gap: 1rem;
`;

const PageViewerItem = styled(motion.a)`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 1rem;
  cursor: pointer;
`;

const Underline = styled(motion.div)`
  display: inline-block;
  height: 1px;
  background-color: white;
`;

const myFont2 = localFont({ src: "../../public/proxima.otf" });

const PageViewer = (props: any) => {
  const { state } = useContext(AppContext);
  console.log(state);

  const defaultTextState = {
    scale: 1,
  } as TargetAndTransition;
  const animatedTextState = {
    scale: 1.2,
  } as TargetAndTransition;
  const defaultTransition = {
    type: "spring",
    stiffness: 1000,
    damping: 100,
  } as Transition;
  const underlineTransition = {
    type: "spring",
    stiffness: 1000,
    damping: 150,
  } as Transition;

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageViewerContainer>
      <PageViewerItem
        className={myFont2.className}
        animate={
          state.currentPageIndex === 0 ? animatedTextState : defaultTextState
        }
        transition={defaultTransition}
        onClick={() => scrollToSection("home")}
      >
        <ExtraSmallText>home</ExtraSmallText>
        <Underline
          animate={{
            maxWidth: state.currentPageIndex === 0 ? "100%" : "0%",
          }}
          transition={underlineTransition}
        />
      </PageViewerItem>
      <PageViewerItem
        className={myFont2.className}
        animate={
          state.currentPageIndex === 1 ? animatedTextState : defaultTextState
        }
        transition={defaultTransition}
        onClick={() => scrollToSection("about")}
      >
        <ExtraSmallText>about</ExtraSmallText>
        <Underline
          animate={{
            maxWidth: state.currentPageIndex === 1 ? "100%" : "0%",
          }}
          transition={underlineTransition}
        />
      </PageViewerItem>
      <PageViewerItem
        className={myFont2.className}
        animate={
          state.currentPageIndex === 2 ? animatedTextState : defaultTextState
        }
        transition={defaultTransition}
        onClick={() => scrollToSection("contact")}
      >
        <ExtraSmallText>contact</ExtraSmallText>
        <Underline
          animate={{
            maxWidth: state.currentPageIndex === 2 ? "100%" : "0%",
          }}
          transition={underlineTransition}
        />
      </PageViewerItem>
    </PageViewerContainer>
  );
};

export default PageViewer;
