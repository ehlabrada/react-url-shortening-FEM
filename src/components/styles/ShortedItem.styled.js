import styled from "styled-components";
import { AuthenticationButton } from "./Header.styled";

export const ItemWrapper = styled.li`
  width: 100%;
  height: 60px;

  padding: 15px 25px;
  border-radius: 8px;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;

    padding: 15px 0;

    flex-direction: column;
    align-items: flex-start;
  }
`;

export const OriginalLink = styled.p`
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`;

export const LineDivider = styled.hr`
  display: none;

  @media screen and (max-width: 768px) {
    width: 100%;

    display: block;
    margin: 5px 0;
    opacity: 0.3;
    color: black;
  }
`;

export const ShortedLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5px 15px;

    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const ShortedLink = styled.p`
  color: ${({ theme }) => theme.colors.primary.cyan};
  margin-right: 10px;
`;

export const CopyButton = styled.button`
  /* width: 80px; */
  padding: 7px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  background-color: ${({ copied, theme }) =>
    copied ? theme.colors.primary.darkViolet : theme.colors.primary.cyan};

  border-radius: 8px;
  background-color: ${({ copied, theme }) =>
    copied && theme.colors.neutral.veryDarkViolet};

  @media screen and (max-width: 768px) {
    width: 100%;

    border-radius: 5px;
    padding: 10px 0;
    font-weight: bolder;
    font-size: 1rem;
  }
`;
