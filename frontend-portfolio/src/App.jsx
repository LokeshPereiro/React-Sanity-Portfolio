import { Navbar } from "./components";
import "./App.scss";

import {
  LandingPage,
  About,
  Work,
  Skills,
  Testimonial,
  Footer,
} from "./helpers";

function App() {
  return (
    <>
      <section className="app">
        <Navbar />
        <LandingPage />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </section>
    </>
  );
}

export default App;
