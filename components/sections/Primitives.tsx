import { motion } from "framer-motion";
import styled from "styled-components";

export const MainWrapper = styled(motion.main)`
  display: block;
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  border: solid white 10px;
  border-radius: 40px;
`;

export const Section = styled(motion.section)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12rem;
  text-align: center;
  text-wrap: balance;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100dvh;
  border-bottom: solid white 10px;

  background-color: #dfdbe5;
`;

export const FirstNameContainer = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  padding-right: 20%;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: 576px) {
    padding-right: 0%;
    justify-content: center;
    align-items: center;
  }
`;

export const LastNameContainer = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  padding-left: 20%;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: 576px) {
    padding-left: 3%;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled(motion.span)`
  font-size: 10rem;

  /* Styles for extra small devices (e.g., phones) */
  @media (max-width: 576px) {
    font-size: 5rem;
  }

  /* Styles for small devices (e.g., landscape phones) */
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 5rem;
  }

  /* Styles for medium devices (e.g., tablets) */
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 7rem;
  }

  /* Styles for large devices (e.g., laptops) */
  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 7rem;
  }

  /* Styles for extra large devices (e.g., desktops) */
  @media (min-width: 1201px) {
    font-size: 7rem;
  }

  @media (min-width: 2160px) {
    font-size: 14rem;
  }
`;

export const SmallText = styled(motion.span)`
  font-size: 5rem;

  /* Styles for extra small devices (e.g., phones) */
  @media (max-width: 576px) {
    font-size: 1rem;
  }

  /* Styles for small devices (e.g., landscape phones) */
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1rem;
  }

  /* Styles for medium devices (e.g., tablets) */
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1rem;
  }

  /* Styles for large devices (e.g., laptops) */
  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }

  /* Styles for extra large devices (e.g., desktops) */
  @media (min-width: 1201px) {
    font-size: 1.5rem;
  }

  @media (min-width: 2160px) {
    font-size: 2.5rem;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  padding: 1.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
 

  /* Styles for extra small devices (e.g., phones) */
  @media (max-width: 576px) {
    height: 10rem
    width: 5rem
  }

  /* Styles for small devices (e.g., landscape phones) */
  @media (min-width: 577px) and (max-width: 768px) {
    height: 10rem
  }

  /* Styles for medium devices (e.g., tablets) */
  @media (min-width: 769px) and (max-width: 992px) {
    height: 10rem
  }

  /* Styles for large devices (e.g., laptops) */
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 10rem
  }

  /* Styles for extra large devices (e.g., desktops) */
  @media (min-width: 1201px) {
    height: auto;
    width: 50rem;
  }

  @media (min-width: 2160px) {
    height: 20rem
  }
`;
