import React from "react";
import {
  CardDescription,
  CardIcon,
  CardTitle,
  StyledCard,
} from "./styles/Card.styled";

const Card = (props) => {
  return (
    <StyledCard alignment={props.alignment}>
      {/* <CardIcon src={props.img} alt="Brand Icon" /> */}
      <CardIcon>
        <img src={props.img} alt="Brand Icon" />
      </CardIcon>
      <CardTitle>Brand Recognition</CardTitle>
      <CardDescription>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dicta
        tenetur repellendus quae provident sed magnam ipsa nulla necessitatibus
        maiores.
      </CardDescription>
    </StyledCard>
  );
};

export default Card;
