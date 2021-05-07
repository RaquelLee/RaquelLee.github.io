import Header from "./components/Header";
import Foot from "./components/Footer";
import ProjectCard from "./components/Project";
import projects from "./components/projects.json";
import PortfolioContainer from "./components/PortfolioContainer";
import PortfolioPage from "./components/pages/Portfolio"

const App = () =>
  <PortfolioContainer>
    <PortfolioPage>
{projects.map(project => (
<ProjectCard
key={project.key}
image={project.image}
title={project.title}
github={project.github}
deployed={project.deployed}
   />))}
   </PortfolioPage>
    <Header />
    <Foot />
  </PortfolioContainer>

export default App;
