import React, { useState } from "react";
import {
  ErrorText,
  FormWrapper,
  InputAndError,
  LinkInputGroup,
  ShortenButton,
  StyledInput,
} from "./styles/FormLink.styled";

const FormLink = ({
  error,
  focusOut,
  setFocusOut,
  formLink,
  setFormLink,
  handleSubmit,
}) => {
  return (
    <FormWrapper>
      <LinkInputGroup>
        <InputAndError>
          <StyledInput
            type="text"
            name="originalLink"
            value={formLink}
            placeholder="Shorten a link here..."
            onChange={(e) => setFormLink(e.target.value)}
            onFocus={() => setFocusOut(false)}
            onBlur={() => setFocusOut(true)}
          />
          {error && <ErrorText>{error.message}</ErrorText>}
          {formLink.length === 0 && focusOut && (
            <ErrorText>Please add a link</ErrorText>
          )}
        </InputAndError>
        <ShortenButton active onClick={handleSubmit}>
          Shorten It!
        </ShortenButton>
      </LinkInputGroup>
    </FormWrapper>
  );
};

export default FormLink;
