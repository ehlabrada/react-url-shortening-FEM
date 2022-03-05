import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};

  padding: 40px 10%;

  display: flex;
  justify-content: space-between;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterTitle = styled.h1`
  color: white;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex: 1; */
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`;

export const ColumnTitle = styled.p`
  font-weight: 700;
  color: white;

  margin-bottom: 15px;
`;

export const ColumnItem = styled.p`
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.gray};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.cyan};
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
  }
`;

export const FooterIcon = styled.div`
  svg {
    margin-right: 15px;
    cursor: pointer;

    & path {
      &:hover {
        fill: ${({ theme }) => theme.colors.primary.cyan};
      }
    }
  }
`;
