import styled from "styled-components";

export const StatisticsSection = styled.section`
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.primary.lightGray};

  /* text-align: center; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};
`;

export const StatisticsSubtitle = styled.h4`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.grayishViolet};
`;

export const CardsWrapper = styled.div`
  width: 80%;
  height: 300px;

  margin-top: 70px;

  display: flex;
  gap: 20px;

  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 60px;
  }
`;

export const MiddleLine = styled.hr`
  width: 100%;
  height: 7px;

  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary.cyan};

  position: absolute;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 7px;
    height: 100%;
  }
`;

export const LoadingSpinner = styled.div`
  background-color: transparent;
`;
