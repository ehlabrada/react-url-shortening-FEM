import React from "react";
import { BoostButton, BoostTitle, StyledBoost } from "./styles/Boost.styled";

const Boost = () => {
  return (
    <StyledBoost>
      <BoostTitle>Boost your links today</BoostTitle>
      <BoostButton active>Get Started</BoostButton>
    </StyledBoost>
  );
};

export default Boost;
