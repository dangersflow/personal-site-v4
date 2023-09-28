import Image from "next/image";
import Shape1 from "../public/shape1.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const ShapeContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 300vh;
`;

export const ShapesBackground = () => {
  return (
    <ShapeContainer>
      <Parallax speed={-5}>
        <Image
          src={Shape1.src}
          alt="background-image2"
          quality={100}
          width={100}
          height={100}
          style={{
            position: "fixed",
            top: "100px",
            left: "100px",
          }}
        />
      </Parallax>
    </ShapeContainer>
  );
};
