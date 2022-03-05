import styled from "styled-components";
import bgShortenDesktop from "../../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../../images/bg-shorten-mobile.svg";

export const FormWrapper = styled.form`
  width: 80%;
  height: 140px;

  border-radius: 10px;

  padding: 30px;
  margin-top: -60px;
  margin-bottom: 40px;

  background-color: ${({ theme }) => theme.colors.primary.darkViolet};
  background-image: url(${bgShortenDesktop});
  background-repeat: no-repeat;
  background-size: 100%;

  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 20px;
    background-image: url(${bgShortenMobile});
  }
`;

export const LinkInputGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const InputAndError = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;

  font-size: 1.2rem;
  padding: 0 20px;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ShortenButton = styled.button`
  width: 20%;
  height: 50px;

  cursor: pointer;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary.cyan};
  color: white;

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.secondary.red};
`;
