import './App.css';
import Contact from './views/contact';
import Heading from './views/heading';
import ProjectViews from './views/projectsView';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <ProjectViews></ProjectViews>
      <Contact></Contact>
    </div>
  );
}

export default App;
