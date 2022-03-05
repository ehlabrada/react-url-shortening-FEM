// Images
import { ReactComponent as IconFacebook } from "../images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../images/icon-instagram.svg";

// Styles
import {
  ColumnInfo,
  ColumnItem,
  ColumnTitle,
  FooterIcon,
  FooterIcons,
  FooterInfo,
  FooterTitle,
  StyledFooter,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTitle>Shortly</FooterTitle>
      <FooterInfo>
        <ColumnInfo>
          <ColumnTitle>Features</ColumnTitle>
          <ColumnItem>Link Shortening</ColumnItem>
          <ColumnItem>Branded Links</ColumnItem>
          <ColumnItem>Analytics</ColumnItem>
        </ColumnInfo>

        <ColumnInfo>
          <ColumnTitle>Resources</ColumnTitle>
          <ColumnItem>Blog</ColumnItem>
          <ColumnItem>Developers</ColumnItem>
          <ColumnItem>Support</ColumnItem>
        </ColumnInfo>
        <ColumnInfo>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnItem>About</ColumnItem>
          <ColumnItem>Our Team</ColumnItem>
          <ColumnItem>Careers</ColumnItem>
          <ColumnItem>Contact</ColumnItem>
        </ColumnInfo>
      </FooterInfo>
      <FooterIcons>
        {/* <FooterIcon src={iconFacebook} alt="Icon" />
        <FooterIcon src={iconTwitter} alt="Icon" />
        <FooterIcon src={iconPinterest} alt="Icon" />
        <FooterIcon src={iconInstagram} alt="Icon" /> */}
        <FooterIcon>
          <IconFacebook />
        </FooterIcon>
        <FooterIcon>
          <IconTwitter />
        </FooterIcon>
        <FooterIcon>
          <IconPinterest />
        </FooterIcon>
        <FooterIcon>
          <IconInstagram />
        </FooterIcon>
      </FooterIcons>
    </StyledFooter>
  );
};

export default Footer;
