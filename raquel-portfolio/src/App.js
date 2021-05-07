import Header from "./components/Header";
import Foot from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import PortfolioPage from "./components/pages/Portfolio"

const App = () =>
  <PortfolioContainer>
    <PortfolioPage />
    <Header />
    <Foot />
  </PortfolioContainer>

export default App;
