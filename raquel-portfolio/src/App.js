import Header from "./components/Header";
import Foot from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import PortfolioPage from "./components/pages/Portfolio"

const App = () =>
<div>
  <PortfolioContainer>
    <PortfolioPage />
    <Header />
  </PortfolioContainer>
    <Foot />
    </div>
export default App;
