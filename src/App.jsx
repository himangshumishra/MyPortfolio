import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import MenuButton from './sections/MenuButton/MenuButton';

function App() {
  return (
    <>
      <MenuButton />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
