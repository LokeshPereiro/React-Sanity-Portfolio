import { Navbar } from "./components";
import "./App.scss";

import { Header, About, Work, Skills, Testimonial, Footer } from "./helpers";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
