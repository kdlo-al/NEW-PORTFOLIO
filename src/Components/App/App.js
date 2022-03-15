import './App.css';
import FixedHeader from '../FixedHeader/FixedHeader';
import Header from '../FixedHeader/Header';
import SectionOne from '../SectionOne/SectionOne';
import ProgrammingLang from '../ProgrammingLang/ProgrammingLang';
import PortfolioProjects from '../PortfolioProjects/PortfolioProjects';
import Resume from '../Resume/Resume';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <FixedHeader />
      <Header />
      <SectionOne />
      <ProgrammingLang />
      <Resume />
      <AboutMe />
      <PortfolioProjects />
      <ContactMe />
    </div >
  );
}

export default App;
