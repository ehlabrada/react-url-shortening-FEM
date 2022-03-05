import React, { useState } from "react";
import {
  AuthenticationButton,
  AuthenticationWrapper,
  HeaderInfo,
  HeaderInfoImg,
  InfoSubTitle,
  InfoTitle,
  InfoWrapper,
  MobileIcon,
  NavbarLine,
  NavMenu,
  NavMenuAndAuthenticatorWrapper,
  NavMenuItem,
  NavMenuLink,
  NavTitle,
  NavWrapper,
  StartedButton,
  StyledHeader,
} from "./styles/Header.styled";

import illustrationWorkingImg from "../images/illustration-working.svg";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <StyledHeader>
      <NavWrapper>
        <NavTitle>Shortly</NavTitle>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaBars />
        </MobileIcon>
        <NavMenuAndAuthenticatorWrapper open={showMobileMenu}>
          {/* <NavInfo> */}
          <NavMenu>
            <NavMenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavMenuLink to="/">Features</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavMenuLink to="/">Pricing</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavMenuLink to="/">Resources</NavMenuLink>
            </NavMenuItem>
          </NavMenu>
          {/* </NavInfo> */}
          <NavbarLine />
          <AuthenticationWrapper>
            <AuthenticationButton>Login</AuthenticationButton>
            <AuthenticationButton active>Sign Up</AuthenticationButton>
          </AuthenticationWrapper>
        </NavMenuAndAuthenticatorWrapper>
      </NavWrapper>

      <HeaderInfo>
        <InfoWrapper>
          <InfoTitle>More than just shorter links</InfoTitle>
          <InfoSubTitle>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </InfoSubTitle>
          <StartedButton active>Get Started</StartedButton>
        </InfoWrapper>
        {/* <HeaderInfoImg src={illustrationWorkingImg} alt="Header Image" /> */}
        <HeaderInfoImg>
          <img src={illustrationWorkingImg} alt="Header Figure" />
        </HeaderInfoImg>
      </HeaderInfo>
    </StyledHeader>
  );
};

export default Header;
