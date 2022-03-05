import React from "react";
import ShortedItem from "./ShortedItem";
import { ShortedItemsWrapper } from "./styles/ShortedItems.styled";

const ShortedItems = ({ shortedLinks, handleCopied }) => {
  const links = shortedLinks.map((shortedLink, index) => {
    return (
      <ShortedItem key={index} {...shortedLink} handleCopied={handleCopied} />
    );
  });

  return <ShortedItemsWrapper>{links}</ShortedItemsWrapper>;
};

export default ShortedItems;
