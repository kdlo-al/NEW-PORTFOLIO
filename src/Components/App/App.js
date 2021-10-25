import './App.css';
import FixedHeader from '../FixedHeader/FixedHeader';
import Header from '../FixedHeader/Header';
import SectionOne from '../SectionOne/SectionOne';
import ProgrammingLang from '../ProgrammingLang/ProgrammingLang';
import PortfolioProjects from '../PortfolioProjects/PortfolioProjects';

function App() {
  return (
    <div className="App">
      <FixedHeader />
      <Header />
      <SectionOne />
      <ProgrammingLang />
      <PortfolioProjects />
    </div>
  );
}

export default App;
