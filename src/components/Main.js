// Components
import Header from "./Header";
import Statistics from "./Statistics";
import Boost from "./Boost";
import Footer from "./Footer";

// Styles
import { StyledMain } from "./styles/Main.styled";

const Main = ({
  loading,
  error,
  focusOut,
  setFocusOut,
  formLink,
  shortedLinks,
  handleSubmit,
  setFormLink,
  handleCopied,
}) => {
  return (
    <StyledMain>
      <Header />
      <Statistics
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
      <Boost />
      <Footer />
    </StyledMain>
  );
};

export default Main;
