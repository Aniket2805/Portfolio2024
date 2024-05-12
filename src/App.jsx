import "./index.css";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
function App() {
  return (
    <div>
      <div class="py-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Header></Header>
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
