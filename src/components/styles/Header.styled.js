import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary.veryLightGray};
  padding-top: 25px;
  padding-bottom: 100px;
`;

export const NavWrapper = styled.nav`
  padding: 10px 10%;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;

export const NavTitle = styled.h1`
  font-weight: bolder;
  margin-right: 20px;
`;

export const NavMenuAndAuthenticatorWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;

    border-radius: 8px;
    padding: 40px 20px;
    background-color: ${({ theme }) => theme.colors.primary.darkViolet};

    transition: 0.5s all ease;

    position: absolute;
    top: 90px;
    left: ${({ open }) => (open ? "5%" : "-100%")};
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;

  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const NavMenuItem = styled.li``;

export const NavMenuLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.grayishViolet};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
  }

  @media screen and (max-width: 768px) {
    font-weight: 700;
    color: white;

    &:hover,
    &:focus {
      color: white;
      outline: none;
    }
  }
`;

export const NavbarLine = styled.hr`
  display: none;

  @media screen and (max-width: 768px) {
    width: 100%;

    display: block;
    color: white;
    opacity: 0.6;
    margin: 20px 0;
  }
`;

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const AuthenticationButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 30px;

  color: ${({ active, theme }) =>
    active ? "white" : theme.colors.neutral.grayishViolet};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary.cyan : "transparent"};

  :nth-child(1) {
    margin-right: 20px;
  }

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-weight: bolder;
    color: white;
    outline: none;
    border: none;

    :nth-child(1) {
      margin-bottom: 10px;
    }

    &:hover,
    &:focus {
      outline: none;
      border: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  /* display: flex; */

  @media screen and (max-width: 768px) {
    width: 100%;
    color: #000;
    display: flex;
    justify-content: flex-end;
    font-size: 1.8rem;
    cursor: pointer;
    outline: none;
    border: none;

    &:focus,
    &:visited,
    &:active {
      outline: none;
      border: none;
    }

    svg {
      /* justify-self: flex-end; */
      fill: black;
      opacity: 0.6;
    }
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************************************* Header Info Section *********************************************//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const HeaderInfo = styled.article`
  width: 100%;

  padding-left: 10%;

  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-left: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;

    padding: 0 20px;
    align-self: center;
    text-align: center;
  }
`;

export const InfoTitle = styled.h1`
  line-height: 50px;
  font-size: 2.9rem;
  font-weight: 700;

  align-self: center;
`;

export const InfoSubTitle = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin: 20px 0;
`;

export const StartedButton = styled(AuthenticationButton)`
  width: 120px;
  cursor: pointer;

  align-self: flex-start;

  @media screen and (max-width: 768px) {
    align-self: center;
    /* padding: 15px 30px; */
    width: 180px;
    font-size: 1.2rem;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

// IMAGE
export const HeaderInfoImg = styled.div`
  img {
    width: 100%;
    height: 100%;
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
      margin-right: -2%;
      align-self: center;
    }
  }
`;
