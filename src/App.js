import './App.css';
import Faqsection from './components/Faqsection';
import Gallerycollection from './components/Gallerycollection';
import Headersection from './components/Headersection';
import Popularised from './components/Popularised';
import Roadmap from './components/Roadmap';
import Supplies from './components/Supplies';
import Team from './components/Team';
import Welcometo from './components/Welcometo';


function App() {
  return (
    <>
      <Headersection />
      <Welcometo />
      <Popularised />
      <Gallerycollection />
      <Supplies />
      <Roadmap />
      <Team />
      <Faqsection />

    </>
  );
}

export default App;
