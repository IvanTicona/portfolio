import { MainLayout } from './layouts/MainLayout';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <MainLayout>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;
