import Header from "./components/Header";
import Foot from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import PortfolioPage from "./components/pages/Portfolio"
// import About from "./components/pages/About.js";
// import Contact from "./components/pages/Contact";
// import NavBar from "./components/NavBar"

const App = () =>
  <div>
    {/* <NavBar /> */}
    <PortfolioContainer>
      <PortfolioPage />
      <Header />
    </PortfolioContainer>
    <Foot />
  </div>
  
export default App;
