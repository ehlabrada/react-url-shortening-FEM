import styled from "styled-components";
import { AuthenticationButton } from "./Header.styled";

// Images
import bgBoostDesktop from "../../images/bg-boost-desktop.svg";
import bgBoostMobile from "../../images/bg-boost-mobile.svg";

export const StyledBoost = styled.article`
  padding: 30px 0;

  background-color: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
  background-image: url(${bgBoostDesktop});
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    background-image: url(${bgBoostMobile});
  }
`;

export const BoostTitle = styled.h1`
  color: white;
  font-size: 2.4rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const BoostButton = styled.button`
  /* width: 50px; */

  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  padding: 10px 25px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary.cyan};

  &:hover {
    opacity: 0.7;
  }
`;
