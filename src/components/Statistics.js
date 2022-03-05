import React from "react";

// Components
import FormLink from "./FormLink";
import Card from "./Card";

// Icons
import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

import {
  CardsWrapper,
  LoadingSpinner,
  MiddleLine,
  StatisticsSection,
  StatisticsSubtitle,
  StatisticsTitle,
} from "./styles/Statistics.styled";
import ShortedItems from "./ShortedItems";
import spinner from "../images/Spinner.svg";

const Statistics = ({
  loading,
  error,
  focusOut,
  setFocusOut,
  formLink,
  setFormLink,
  shortedLinks,
  handleSubmit,
  handleCopied,
}) => {
  return (
    <StatisticsSection>
      <FormLink
        loading={loading}
        error={error}
        focusOut={focusOut}
        setFocusOut={setFocusOut}
        formLink={formLink}
        setFormLink={setFormLink}
        handleSubmit={handleSubmit}
      />
      {loading && (
        <LoadingSpinner>
          <img src={spinner} alt="Loading Spinner" />
        </LoadingSpinner>
      )}
      {shortedLinks.lenght !== 0 && (
        <ShortedItems shortedLinks={shortedLinks} handleCopied={handleCopied} />
      )}
      <StatisticsTitle>Advanced Statistics</StatisticsTitle>
      <StatisticsSubtitle>
        Track how your links are performing across the web <br /> with our
        advanced statistics dashboard
      </StatisticsSubtitle>
      <CardsWrapper>
        <Card img={iconBrandRecognition} alignment="flex-start" />
        <Card img={iconDetailedRecords} alignment="center" />
        <Card img={iconFullyCustomizable} alignment="flex-end" />
        {/* <MiddleLine></MiddleLine> */}
        <MiddleLine />
      </CardsWrapper>
    </StatisticsSection>
  );
};

export default Statistics;
