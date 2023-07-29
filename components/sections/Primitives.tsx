import { motion } from "framer-motion";
import styled from "styled-components";

export const MainWrapper = styled(motion.main)`
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Section = styled(motion.section)`
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

export const Text = styled(motion.span)`
  font-size: 5rem;
`;
