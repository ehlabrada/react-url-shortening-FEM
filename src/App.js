import { useEffect, useState } from "react";

// Third party libraries
import axios from "axios";
import { nanoid } from "nanoid";

// Components
import Main from "./components/Main";

// Styles
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/theme/globalStyle";
import Theme from "./components/styles/theme/Theme";

function App() {
  // States Helpers
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [focusOut, setFocusOut] = useState(false);

  const [formLink, setFormLink] = useState("");
  const [shortedLinks, setShortedLinks] = useState(
    () => JSON.parse(localStorage.getItem("shortedLinks")) || []
  );

  // Get the new shorted item after the original is submitted
  // PD: using axios
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (formLink.length === 0) {
        throw new Error("There is empty the input, please add some link");
      } else {
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${formLink}`
        );
        const originalLink = response.data.result.original_link;
        const shortedLink = response.data.result.full_short_link;
        setFormLink("");
        setFocusOut(false);
        setShortedLinks((prevLinks) => {
          return [
            { id: nanoid(), originalLink, shortedLink, copied: false },
            ...prevLinks,
          ];
        });
        setError(null);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Change the button style of the shorted item after is clicked
  const handleCopied = (id) => {
    setShortedLinks((prevLinks) =>
      prevLinks.map((shortedLink) =>
        shortedLink.id === id
          ? { ...shortedLink, copied: true }
          : { ...shortedLink, copied: false }
      )
    );
  };

  // Save the shortedLinks to the local storage
  useEffect(() => {
    localStorage.setItem("shortedLinks", JSON.stringify(shortedLinks));
  }, [shortedLinks]);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main
          loading={loading}
          error={error}
          focusOut={focusOut}
          setFocusOut={setFocusOut}
          formLink={formLink}
          setFormLink={setFormLink}
          shortedLinks={shortedLinks}
          handleSubmit={handleSubmit}
          handleCopied={handleCopied}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
