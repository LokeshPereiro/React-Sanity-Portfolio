import { Navbar } from "./components";
import { Header, Footer, About, Skills, Testimonial, Work } from "./container";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
