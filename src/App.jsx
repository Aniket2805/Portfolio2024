import "./index.css";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <div class="py-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
