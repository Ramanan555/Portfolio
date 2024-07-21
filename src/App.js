import './App.css';
import './Content';
import Content from './Content';
import Contact from './Contact';
import Projects from './Projects';
import ParticlesComponent from './components/Particles';
import Download from './Download';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/> 
    <div>
      <Content/>
    </div>
    <div>  
      <Projects/>
    </div>
    <div> 
      <Contact/>
    </div>
  </div>
  
  

  );
}

export default App;
