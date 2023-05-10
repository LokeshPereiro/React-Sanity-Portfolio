import { Navbar } from "./components";
import { Header, Footer, About, Skills, Testimonial, Work } from "./container";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
