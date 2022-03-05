import {
  CopyButton,
  ItemWrapper,
  LineDivider,
  OriginalLink,
  ShortedLink,
  ShortedLinkWrapper,
} from "./styles/ShortedItem.styled";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortedItem = ({
  id,
  originalLink,
  shortedLink,
  copied,
  handleCopied,
}) => {
  return (
    <ItemWrapper>
      <OriginalLink>{originalLink}</OriginalLink>
      <LineDivider />
      <ShortedLinkWrapper>
        <ShortedLink>{shortedLink}</ShortedLink>
        <CopyToClipboard text={shortedLink} onCopy={() => handleCopied(id)}>
          <CopyButton copied={copied}>{copied ? "Copied" : "Copy"}</CopyButton>
        </CopyToClipboard>
      </ShortedLinkWrapper>
    </ItemWrapper>
  );
};

export default ShortedItem;
