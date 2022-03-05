import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: white;
  padding: 25px;
  z-index: 10;
  border-radius: 8px;

  align-self: ${(props) => props.alignment || "flex-start"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

export const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.darkViolet};

  position: absolute;
  left: 7%;
  top: -15%;

  display: flex;

  img {
    width: 40px;

    position: absolute;
    top: 23%;
    left: 22%;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    left: 38%;
    /* right: 50%; */
  }
`;

// export const CardIcon = styled.img``;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.darkViolet};
  font-weight: 700;

  margin-top: 40px;
`;

export const CardDescription = styled.p`
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.neutral.grayishViolet};
`;
